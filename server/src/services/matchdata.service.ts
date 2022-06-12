import { mongoService, socketServer } from "../index";
import { Socket } from "socket.io";
import { logger } from "../middlewares/logging.middleware";
import * as robotevents from 'robotevents';
import { Match } from "robotevents/out/endpoints/matches";
import * as cliProgress from 'cli-progress'

// TODO: Find a more appropriate name for this service
export class MatchDataService {
    private dataCollectionName: string = "hermes";
    private readonly dataConfigName: string = "hermes-config";
    private updating: boolean = false;
    private config: any = {};

    public initialize() {
        this.initialFetch();

        // Update match data every 5 minutes
        setInterval(() => {
            this.fetchMatchData();
        }, 1000 * 60 * 5);
    }

    private async initialFetch() {
        await this.fetchConfig();
        await this.fetchMatchData();
    }

    private async fetchConfig() {
        const configObj = await mongoService.getDb().collection(this.dataConfigName).findOne({});

        logger.debug("Successfully loaded the following configuration:", configObj);

        this.config = configObj.config;
        this.dataCollectionName = this.config["tournament.sku-id"]
    }

    private async updateClientData() {
        // Retrieve all data from mongodb
        const data = await mongoService.getDb().collection(this.dataCollectionName).find({}).toArray();
        const config = await mongoService.getDb().collection(this.dataConfigName).findOne({});

        // Send updated data to all clients
        socketServer.emit("data-update", { data, config: config.config });
    }

    private async updateServerConfig(newConfig: any) {
        // TODO: Only make the refetch happen if SKU or division have changed
        this.config = newConfig;
        this.dataCollectionName = this.config["tournament.sku-id"]

        mongoService.getDb().collection(this.dataConfigName).updateOne(
            { "id": "main-config" },
            {
                $set: {
                    config: newConfig
                }
            },
            { upsert: true }
        ).then(_ => {
            logger.debug("Successfully updated MongoDB with new application configuration");
            this.updateClientData();
            this.fetchMatchData();
        })
    }



    private async updateServerData(newData: any) {
        // Bulk write data to avoid unncessary write calls to mongodb
        const bulk = []

        for (const team of newData) {
            bulk.push({
                updateOne: {
                    filter: { "id": team.id },
                    update: {
                        $set: {
                            id: team.id,
                            name: team.name,
                            organizaiton: team.organization,
                            skills: team.skills,
                            matches: team.matches,
                            division: team.division
                        }
                    },
                    upsert: true
                }
            })
        }

        await mongoService.getDb().collection(this.dataCollectionName).bulkWrite(bulk);

        logger.debug("Finished pushing MongoDB bulk write update");
    }

    public async fetchMatchData() {
        logger.debug("Starting match data fetch retrieval")

        this.updating = true;

        const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

        const teams = new Set();

        // RobotEvents requires an API key to operate
        robotevents.authentication.setBearer(process.env.API_KEY);

        const skuId = "RE-VRC-" + this.config["tournament.sku-id"];


        // Pull event data
        const event = await robotevents.events.get(skuId);

        if (event === null) {
            logger.error(`The provided tournament SKU ID ${skuId} does not exist, cancelling data update`)
            return;
        }

        logger.debug(`Successfully loaded event with SKU ID ${skuId}`);


        const division = event.divisions[this.config["tournament.division"]];

        const matches = await event.matches(division.id);

        const matchesPerTeam = new Map<number, Match[]>();

        if (teams.size === 0) {
            matches.forEach(match => {
                const matchTeams = [
                    match.alliances[0].teams[0].team.id,
                    match.alliances[0].teams[1].team.id,
                    match.alliances[1].teams[0].team.id,
                    match.alliances[1].teams[1].team.id
                ]

                matchTeams.forEach(t => {
                    teams.add(t);

                    ((matchesPerTeam as any)[t] = (matchesPerTeam as any)[t] || []).push(match);
                })
            })
        }

        const teamObjects = [...(await event.teams()).entries()].filter(t => teams.has(t[0])).map(t => t[1]);

        const data: any = []

        bar1.start(teamObjects.length, 0);


        teamObjects.forEach((team, index) => {
            setTimeout(() => {

                team.skills({ season: [robotevents.seasons.current("VRC")] }).then(skills => {
                    const allSkills = skills.array();

                    const programming = allSkills.filter(sk => sk.type === 'programming').reduce((a, b) => a.score > b.score ? a : b, {score: 0}).score;
                    const driver = allSkills.filter(sk => sk.type === 'driver').reduce((a, b) => a.score > b.score ? a : b, {score: 0}).score;

                    const teamMatches = (matchesPerTeam as any)[teamObjects[index].id] as Match[]

                    const ranking = teamObjects[index].rankings({ event: [event.id] }).then(r => {
                        const currentRank = r.array().length > 0 ? r.array()[0] : { rank: 0, wins: 0, losses: 0, ties: 0, wp: 0, ap: 0, sp: 0, high_score: 0 };

                        data.push({
                            name: teamObjects[index].team_name,
                            id: teamObjects[index].number,
                            organization: teamObjects[index].organization,
                            skills: {
                                "driver": driver,
                                "programming": programming,
                                "world-rank": "0"
                            },
                            division: {
                                "ranking": currentRank.rank,
                                "wins": currentRank.wins,
                                "losses": currentRank.losses,
                                "ties": currentRank.ties,
                                "wp": currentRank.wp,
                                "ap": currentRank.ap,
                                "sp": currentRank.sp,
                                "high_score": currentRank.high_score,
                                "average_points": -1,
                                "total_points": -1,
                            },
                            matches: teamMatches.map(match => [match.name, {
                                "red-alliance": {
                                    score: match.alliances[0].score,
                                    teams: match.alliances[0].teams.map(t => t.team.name)
                                },
                                "blue-alliance": {
                                    score: match.alliances[1].score,
                                    teams: match.alliances[1].teams.map(t => t.team.name)

                                }
                            }])
                        })

                        bar1.increment();

                        logger.debug(bar1.getProgress().toString() + " versus " + teamObjects.length);
                        if (bar1.getProgress() === 1) {
                            bar1.stop();

                            logger.debug("Successfully finished fetching data")

                            this.updateServerData(data);

                            this.updating = false;


                        }

                    }).catch(e => {
                        logger.error("Experienced an error while fetching skills rankings", e)
                    })




                }).catch(e => {
                    logger.error("Experienced an error while fetching division rankings", e)
                })
            }, 0.8 * 1000 * index);

        })

    }

    public connect(socket: Socket): void {
        logger.debug("New Socket.IO Connection received");

        if (mongoService.getDb() === undefined) {
            logger.error("MongoDB Service reported as undefined during socket connection");
            return;
        }

        this.updateClientData();

        socket.on('begin-scouting-data', (newData) => {
            logger.debug(`Started scouting form with team data`, newData);

            // Update team to be marked as in-progress
            // The in-progress status is updated to all other clients in order to prevent
            // two people  from scouting the same team at once.
            mongoService.getDb().collection(this.dataCollectionName).updateOne(
                { "id": newData.team },
                { $set: { "scouting_status": "in-progress" } },
                { upsert: true }
            ).then(prom => {
                logger.debug("Successfully updated MongoDB with new scouting data");
                this.updateClientData();
            })
        })

        // Triggered when a scout submits a scouting form
        socket.on("add-scouting-data", (newData) => {
            logger.info(`Received ${JSON.stringify(newData)} from a client form submission`)

            mongoService.getDb().collection(this.dataCollectionName).updateOne(
                { "id": newData.team },
                {
                    $set: {
                        "scouting_status": "done",
                        "scouting": newData.data
                    }
                },
                { upsert: true }
            ).then(_ => {
                logger.debug("Successfully updated MongoDB with new scouting data");
                this.updateClientData();
            })
        });

        // Triggered when a scout attempts to cancel their scouting form, e.g. closing the browser or hitting the back button
        socket.on('cancel-scouting-data', (newData) => {
            mongoService.getDb().collection(this.dataCollectionName).updateOne(
                { "id": newData.team },
                { $set: { "scouting_status": "not-started" } },
                { upsert: true }
            ).then(prom => {
                logger.debug("Successfully updated MongoDB and marked a team as not-started");
                this.updateClientData();
            })
        })

        socket.on('update-config', (newConfig) => {
            this.updateServerConfig(newConfig);
        })
    }
}