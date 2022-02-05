import React from "react";
import ReactTooltip from "react-tooltip";
import useStore from "../stores/TeamDataStore";

function getIndexScoreColor(score, maxScore) {
    let ratio = score / maxScore;

    if (ratio < 0.3) {
        return "FF0000";
    } else if (ratio < 0.4) {
        return "FF8C00";
    } else if (ratio < 0.6) {
        return "FFA500"
    } else if (ratio < 0.8) {
        return "EECD00"
    } else if (ratio <= 1) {
        return "00A86B"
    }
}

export function ScoutingSection(props) {
    return (
        <>
            <h5 className="text-center text-primary">Scouting Information</h5>
            <div className="row text-secondary ">
                <h5 className="col text-center">
                    <span className="text-success">{props.scoutingScore}</span>
                </h5>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Auton Consistency</h6>
                <h6 className="col text-end">{props.scouting["auton-consistency"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Auton Compatibility</h6>
                <h6 className="col text-end">{props.scouting["auton-compatibility"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Match Auton Points</h6>
                <h6 className="col text-end">{props.scouting["auton-match-points"] !== "" ? props.scouting["auton-match-points"] : 0}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Mobo On Plat</h6>
                <h6 className="col text-end">{props.scouting["can-place-mobo-on-platform"] === "on" ? "Yes" : "No"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Yellow Mobo On Plat</h6>
                <h6 className="col text-end">{props.scouting["can-move-yellow-mobile-goals"] === "on" ? "Yes" : "No"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Park</h6>
                <h6 className="col text-end">{props.scouting["can-park"] === "on" ? "Yes" : "No"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Mobo Park Count</h6>
                <h6 className="col text-end">{props.scouting["mobo-park-count"] !== "" ? props.scouting["mobo-park-count"] : 0}</h6>
            </div>
        </>);
}

function SkillsSection(props) {
    return (
        <>
            <div className="row">
                {props.withScout ?? <div className="col" />}
                <div className={props.withScout ?? "col-7"}>

                    <h5 className="text-center text-primary">Skills Scores</h5>
                    <div className="row text-secondary">
                        <h6 className="col">Driver</h6>
                        <h6 className="col text-end">{props.skills["driver"]}</h6>
                    </div>
                    <div className="row text-secondary ">
                        <h6 className="col">Programming</h6>
                        <h6 className="col text-end">{props.skills["programming"]}</h6>
                    </div>
                    <div className="row text-secondary ">
                        <h6 className="col">World Ranking</h6>
                        <h6 className="col text-end">{props.skills["world-rank"]}</h6>
                    </div>
                </div>
                {props.withScout ?? <div className="col" />}
            </div>
        </>
    )
}

function TeamNameDisplay(props) {
    const isTeam = props.currentTeam === props.text;

    const color = props.color;

    return (
        <span className="col" style={{ color: color, textDecoration: isTeam ? "underline" : "none" }}>{props.text}</span>
    )
}

function AllianceScoreDisplay(props) {
    const isTeam = props.currentTeam === props.teamOne || props.currentTeam === props.teamTwo;

    const color = props.color;

    return (
        <span className="col" style={{ color: color, textDecoration: isTeam ? "underline" : "none" }}>{props.text}</span>
    )
}

function MatchStandingsSection(props) {
    return (
        <>
            <h4 className="text-center text-secondary pb-2">{props.teamName}</h4>
            <h5 className="text-center text-primary">Current Match Standings</h5>
            <div className="row text-secondary ">
                <h5 className="col text-center">
                    <span className="text-success">{props.division["wins"]}</span>
                    <span className="text-secondary"> - </span>
                    <span className="text-danger">{props.division["losses"]}</span>
                    <span className="text-secondary"> - </span>
                    <span className="text-secondary">{props.division["ties"]}</span>
                </h5>
            </div>
            <div className="row text-secondary ">
                <h6 className="fw-bold col">Rank</h6>
                <h6 className="fw-bold col text-end">#{props.division["ranking"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">Win Points</h6>
                <h6 className="col text-end">{props.division["wp"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">Auton Points</h6>
                <h6 className="col text-end">{props.division["ap"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">Skills Points</h6>
                <h6 className="col text-end">{props.division["sp"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">High Score</h6>
                <h6 className="col text-end">{props.division["high_score"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">Average Score</h6>
                <h6 className="col text-end">{props.division["average_points"]}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col">Total Score</h6>
                <h6 className="col text-end">{props.division["total_points"]}</h6>
            </div>
        </>
    )
}

function MatchCard(props) {
    const data = props.cards;

    return (
        <>
            <div className="col-xl-12 mx-auto col-sm-5 pt-2">
                <div className="card card-common">
                    <h3 className="d-flex justify-content-between pt-3 pb-1 ps-2 pe-2 text-secondary">
                        <div className="col text-center" />
                        <div className="col text-center" />
                        <div className="col text-center">
                            <AllianceScoreDisplay color="tomato" currentTeam={props.currentTeam} teamOne={props.redAlliance["teams"][0]} teamTwo={props.redAlliance["teams"][1]} text={props.redAlliance["score"]} />
                        </div>
                        <div id={props.matchName} className="col text-center"> {props.matchName}</div>
                        <div className="col text-center">
                            <AllianceScoreDisplay color="#00BFFF" currentTeam={props.currentTeam} teamOne={props.blueAlliance["teams"][0]} teamTwo={props.blueAlliance["teams"][1]} text={props.blueAlliance["score"]} />
                        </div>
                        <div className="col text-center">

                        </div>
                        <div className="col text-center" />

                    </h3>
                </div>
            </div>
            <div className="col-xl-6 mx-auto col-sm-5 pb-3 pt-2">

                <div className="card card-common">
                    <div data-tip data-for={props.matchName + "-red"} className="card-body">
                        <h5 className="row col-md-15 text-secondary">
                            <TeamNameDisplay color="tomato" currentTeam={props.currentTeam} text={props.redAlliance["teams"][0]} />
                            <TeamNameDisplay color="tomato" currentTeam={props.currentTeam} text={props.redAlliance["teams"][1]} />
                        </h5>
                        <div className="row col-md-15 text-secondary">
                            <span className="col">Index</span>
                            <span className="col">Scouting</span>
                            <span className="col">Skills</span>
                            <span className="col">Index</span>
                            <span className="col">Scouting</span>
                            <span className="col">Skills</span>
                        </div>
                        <div className="row col-md-15 text-secondary">
                            <h3 className="col" >{data[props.redAlliance["teams"][0]]["score"]}</h3>
                            <h3 className="col" >{data[props.redAlliance["teams"][0]]["scoutingScore"]}</h3>
                            <h3 className="col" >{data[props.redAlliance["teams"][0]]["skills"]["driver"] + data[props.redAlliance["teams"][0]]["skills"]["programming"]}</h3>
                            <h3 className="col" >{data[props.redAlliance["teams"][1]]["score"]}</h3>
                            <h3 className="col" >{data[props.redAlliance["teams"][1]]["scoutingScore"]}</h3>
                            <h3 className="col" >{data[props.redAlliance["teams"][1]]["skills"]["driver"] + data[props.redAlliance["teams"][1]]["skills"]["programming"]}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 mx-auto col-sm-5 pb-3 pt-2">

                <div className="card card-common">
                    <div data-tip data-for={props.matchName + "-blue"} className="card-body">
                        <h5 className="row col-md-15 text-secondary">
                            <TeamNameDisplay color="#00BFFF" currentTeam={props.currentTeam} text={props.blueAlliance["teams"][0]} />
                            <TeamNameDisplay color="#00BFFF" currentTeam={props.currentTeam} text={props.blueAlliance["teams"][1]} />
                        </h5>
                        <div className="row col-md-15 text-secondary">
                            <span className="col">Index</span>
                            <span className="col">Scouting</span>
                            <span className="col">Skills</span>
                            <span className="col">Index</span>
                            <span className="col">Scouting</span>
                            <span className="col">Skills</span>
                        </div>
                        <div className="row col-md-15 text-secondary">
                            <h3 className="col" >{data[props.blueAlliance["teams"][0]]["score"]}</h3>
                            <h3 className="col" >{data[props.blueAlliance["teams"][0]]["scoutingScore"]}</h3>
                            <h3 className="col" >{data[props.blueAlliance["teams"][0]]["skills"]["driver"] + data[props.blueAlliance["teams"][0]]["skills"]["programming"]}</h3>
                            <h3 className="col" >{data[props.blueAlliance["teams"][1]]["score"]}</h3>
                            <h3 className="col" >{data[props.blueAlliance["teams"][1]]["scoutingScore"]}</h3>
                            <h3 className="col" >{data[props.blueAlliance["teams"][1]]["skills"]["driver"] + data[props.blueAlliance["teams"][1]]["skills"]["programming"]}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <ReactTooltip className={`tooltip col-md-10 p-0`} id={props.matchName + "-red"} type='error'>
                <div className="col-md-12 mx-auto col-sm-3">
                    <div className="card card-common">
                        <div className="card-body">
                            {props.scouting !== undefined ? <>
                                <div className="row">
                                    <div className="col">
                                        <MatchStandingsSection division={data[props.redAlliance["teams"][0]]["division"]} />
                                        <MatchStandingsSection division={data[props.redAlliance["teams"][1]]["division"]} />
                                    </div>
                                    {/* <div className="col">
                                        {props.scouting !== undefined &&
                                            <>
                                                <ScoutingSection withScout={true} scoutingScore={props.scoutingScore} scouting={props.scouting} />
                                            </>
                                        }
                                    </div> */}
                                </div>
                                {/* <SkillsSection skills={props.skills} /> */}
                            </> :
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <MatchStandingsSection teamName={props.redAlliance["teams"][0]} division={data[props.redAlliance["teams"][0]]["division"]} />
                                        </div>
                                        <div className="col">
                                            <MatchStandingsSection teamName={props.redAlliance["teams"][1]} division={data[props.redAlliance["teams"][1]]["division"]} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <SkillsSection withScout={false} skills={data[props.redAlliance["teams"][0]]["skills"]} />
                                        </div>
                                        <div className="col">
                                            <SkillsSection withScout={false} skills={data[props.redAlliance["teams"][1]]["skills"]} />
                                        </div>
                                    </div>


                                </>
                            }

                        </div>
                    </div>
                </div>
            </ReactTooltip>
            <ReactTooltip className={`tooltip col-md-10 p-0`} id={props.matchName + "-blue"} type='error'>
                <div className="col-md-12 mx-auto col-sm-3">
                    <div className="card card-common">
                        <div className="card-body">
                            {props.scouting !== undefined ? <>
                                <div className="row">
                                    <div className="col">
                                        <MatchStandingsSection division={data[props.blueAlliance["teams"][0]]["division"]} />
                                        <MatchStandingsSection division={data[props.blueAlliance["teams"][1]]["division"]} />
                                    </div>
                                    {/* <div className="col">
                                        {props.scouting !== undefined &&
                                            <>
                                                <ScoutingSection withScout={true} scoutingScore={props.scoutingScore} scouting={props.scouting} />
                                            </>
                                        }
                                    </div> */}
                                </div>
                                {/* <SkillsSection skills={props.skills} /> */}
                            </> :
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <MatchStandingsSection teamName={props.blueAlliance["teams"][0]} division={data[props.blueAlliance["teams"][0]]["division"]} />
                                        </div>
                                        <div className="col">
                                            <MatchStandingsSection teamName={props.blueAlliance["teams"][1]} division={data[props.blueAlliance["teams"][1]]["division"]} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <SkillsSection withScout={false} skills={data[props.blueAlliance["teams"][0]]["skills"]} />
                                        </div>
                                        <div className="col">
                                            <SkillsSection withScout={false} skills={data[props.blueAlliance["teams"][1]]["skills"]} />
                                        </div>
                                    </div>


                                </>
                            }

                        </div>
                    </div>
                </div>
            </ReactTooltip>
        </>
    )

}

export default MatchCard;