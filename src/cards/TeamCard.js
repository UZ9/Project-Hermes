import React from "react";
import ReactTooltip from "react-tooltip";
import useStore from "../stores/TeamDataStore";
import { Form } from "react-bootstrap";

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

function MatchStandingsSection(props) {
    return (
        <>
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

function TeamCard(props) {



    return (
        <>
            <div className="col-xl-3 mx-auto col-sm-5 p-2">
                <div className="card card-common">
                    <div data-tip data-for={props.number} className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="text-start text-secondary">
                                <h5>{props.number}</h5>
                                <h6 className="align-top">{props.teamName}</h6>

                            </div>

                        </div>

                        <div className="row col-md-15 text-secondary">
                            <span className="col">Index</span>
                            <span className="col">Scouting</span>
                            <span className="col">Skills</span>
                        </div>
                        <div className="row col-md-15 text-secondary">
                            <h3 className="col" style={{ color: `#${getIndexScoreColor(props.score, props.maxScore)}` }}>{props.score}</h3>
                            <h3 className="col">{props.scouting !== undefined ? props.scoutingScore : "0"}</h3>
                            <h3 className="col">{props.skills["programming"] + props.skills["driver"]}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <ReactTooltip className={`tooltip col-md-${props.scouting !== undefined ? 6 : 3} p-0`} id={props.number} type='error'>
                <div className="col-md-10 mx-auto col-sm-3">
                    <div className="card card-common">
                        <div className="card-body">
                            {props.scouting !== undefined ? <>
                                <div className="row">
                                    <div className="col">
                                        <MatchStandingsSection division={props.division} />
                                    </div>
                                    <div className="col">
                                        {props.scouting !== undefined &&
                                            <>
                                                <ScoutingSection withScout={true} scoutingScore={props.scoutingScore} scouting={props.scouting} />
                                            </>
                                        }
                                    </div>
                                </div>
                                <SkillsSection skills={props.skills} />
                            </> :
                                <>
                                    <MatchStandingsSection division={props.division} />
                                    <SkillsSection withScout={false} skills={props.skills} />
                                </>
                            }

                        </div>
                    </div>
                </div>
            </ReactTooltip>
        </>
    )

}

export default TeamCard;