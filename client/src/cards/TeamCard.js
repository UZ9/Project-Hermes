import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Modal } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

export function getIndexScoreColor(score, maxScore) {
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
                <h6 className="col-7">Full Win-Point</h6>
                <h6 className="col text-end">{(props.scouting["full-win-point"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Half Win-Point</h6>
                <h6 className="col text-end">{(props.scouting["half-win-point"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Left Auton</h6>
                <h6 className="col text-end">{(props.scouting["left-auton"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Right Auton</h6>
                <h6 className="col text-end">{(props.scouting["right-auton"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Mid Auton</h6>
                <h6 className="col text-end">{(props.scouting["mid-auton"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Consistent Goal Rush</h6>
                <h6 className="col text-end">{(props.scouting["consistent-goal-rush"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7"># Motor Drive</h6>
                <h6 className="col text-end">{(props.scouting["4-motor-drive"] || "No").replace("on", "Yes") || props.scouting["6-motor-drive"].replace("no", "Yes") || props.scouting["8-motor-drive"].replace("no", "Yes") || "N/A"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Transmission</h6>
                <h6 className="col text-end">{(props.scouting["transmission"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Auton Wings</h6>
                <h6 className="col text-end">{(props.scouting["auton-wings"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Auton Stick</h6>
                <h6 className="col text-end">{(props.scouting["auton-stick"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Front Clamp Type</h6>
                <h6 className="col text-end">{props.scouting["pneumatic-front-clamp"] === "on" ? "Pneumatic" : props.scouting["motor-front-clamp"] === "on" ? "Motor" : "N/A"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Back Clamp Type</h6>
                <h6 className="col text-end">{props.scouting["pneumatic-back-clamp"] === "on" ? "Pneumatic" : props.scouting["motor-back-clamp"] === "on" ? "Motor" : "N/A"}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Ring Intake Consistency</h6>
                <h6 className="col text-end">{(props.scouting["consistent-ring-intake"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Park</h6>
                <h6 className="col text-end">{(props.scouting["park"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Double Park</h6>
                <h6 className="col text-end">{(props.scouting["double-park"] || "No").replace("on", "Yes")}</h6>
            </div>
            <div className="row text-secondary">
                <h6 className="col-7">Park with # Mobile Goals</h6>
                <h6 className="col text-end">{(props.scouting["full-win-point"] || "No").replace("on", "Yes")}</h6>
            </div>
        </>);
}

function ScoutingNotesSection(props) {
    return (
        <>
            <div className="row mt-3">
                <h5 className="text-center text-primary">Scouting Notes</h5>
                <div className="m-2 row text-secondary">
                    <ul>
                        <li>Particulary good at (thing)</li>
                        <li><Link className="text-decoration-none" to={'/matches#Qualifier #8'}>Qualifier 8</Link> was pretty rad.</li>
                        <li>Also good at (other thing)</li>
                        <li>Bad at (thing)</li>
                        <li>Robot encountered several issues regarding (thing) during matches</li>
                        <li>Ended up throwing <Link className="text-decoration-none" to={'/matches#Final #1-1'}>Final #1-1</Link> match</li>
                    </ul>

                </div>

            </div>
        </>
    )
}


function SkillsSection(props) {
    return (
        <>
            <div className="row">
                {props.withScout ?? <div className="col" />}
                <div className={props.withScout ? "col-7" : ""}>

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
                <h6 className="col">CCWM</h6>
                <h6 className="col text-end">{props.division["total_points"]}</h6>
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

    const [show, setShow] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClose = () => setShow(false);

    const handleClick = async e => {
        e.preventDefault();

        setShow(true);
    }


    return (
        <>
            <div className="col-xl-3 mx-auto col-sm-6 p-2">
                <div className="card card-common">
                    <div data-tip data-for={props.number}  onMouseEnter={() => setShowTooltip(true)} className="card-body">

                        <div className="d-flex justify-content-between">
                            <div className="text-start">
                                <button style={{ textDecoration: "none" }} onClick={handleClick} className="stretched-link text-secondary shadow-none scout-card-button subtext"><h4 className="subtext">{props.number}</h4></button>
                                <h6 className="align-top subtext">{props.teamName}</h6>

                            </div>

                        </div>

                        <div className="row col-md-15">
                            <span className="col subtext">Index</span>
                            <span className="col subtext">Scouting</span>
                            <span className="col subtext">Skills</span>
                        </div>
                        <div className="row col-md-15">
                            <h4 className="col subtext" style={{ color: `#${getIndexScoreColor(props.score, props.maxScore)}` }}>{props.score}</h4>
                            <h4 className="col subtext">{props.scouting !== undefined ? props.scoutingScore : "0"}</h4>
                            <h4 className="col subtext">{props.skills["programming"] + props.skills["driver"]}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {showTooltip ?

                <ReactTooltip className={`tooltip col-md-${props.scouting !== undefined ? 6 : 3} p-0`} id={props.number} type='error'>
                    <div className="col-md-10 mx-auto col-sm-3">
                        <div className="card card-common">
                            <div className="card-body">
                                {props.scouting !== undefined ? <>
                                    <div className="row">
                                        <div className="col">
                                            <MatchStandingsSection division={props.division} />
                                            <SkillsSection withScout={false} skills={props.skills} />

                                        </div>
                                        <div className="col">
                                            {props.scouting !== undefined &&
                                                <>
                                                    <ScoutingSection withScout={true} scoutingScore={props.scoutingScore} scouting={props.scouting} />
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <img className="mx-auto d-block" style={{ maxWidth: "300px", maxHeight: "300px" }} src={props.scouting["robot-image"]} alt="Robot" />

                                    </div>
                                </> :
                                    <>
                                        <MatchStandingsSection division={props.division} />
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </ReactTooltip>


                : undefined}

            <Modal show={show} onHide={handleClose} size="lg">
                <div className="container-fluid">
                    <div className="m-3">

                        <div className="row">
                            <div className="col">
                                <MatchStandingsSection division={props.division} />
                                <SkillsSection skills={props.skills} />

                            </div>
                            <div className="col">
                                {props.scouting !== undefined &&
                                    <>
                                        <ScoutingSection withScout={true} scoutingScore={props.scoutingScore} scouting={props.scouting} />
                                    </>
                                }
                            </div>
                        </div>
                        <ScoutingNotesSection skills={props.skills} />
                    </div>
                </div>
            </Modal>
        </>
    )

}

export default TeamCard;