import { mongoService, socketServer } from "../index";
import { Socket } from "socket.io";
import { logger } from "../middlewares/logging.middleware";

// TODO: Find a more appropriate name for this service
export class MatchDataService {
    private readonly collectionName: string = "hermes";

    private async updateClientData() {
        // Retrieve all data from mongodb
        const data = await mongoService.getDb().collection(this.collectionName).find({}).toArray();

        // Send updated data to all clients
        socketServer.emit("data-update", { data });
    }

    // public fetchMatchData(): void {

    // }

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
            mongoService.getDb().collection("hermes").updateOne(
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

            mongoService.getDb().collection(this.collectionName).updateOne(
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
            mongoService.getDb().collection("hermes").updateOne(
                { "id": newData.team },
                { $set: { "scouting_status": "not-started" } },
                { upsert: true }
            ).then(prom => {
                logger.debug("Successfully updated MongoDB and marked a team as not-started");
                this.updateClientData();
            })
        })
    }
}