import React from "react";
import { Image } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import "./MatchCard.css"

import { ReactComponent as RedTriangleSvg } from '../../assets/svg/redtriangle.svg'
import { ReactComponent as BlueTriangleSvg } from '../../assets/svg/bluetriangle.svg'

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

            <div className="col-xl-12 px-0 col-sm-5 match-card mb-3">
                <div className="text-center logo text-white matches-title">
                    {props.matchName.toUpperCase()}
                </div>
                <div className="d-flex justify-content-end">
                    <BlueTriangleSvg style={{ marginTop: "40px", marginRight: "auto" }} />

                    <RedTriangleSvg style={{ marginTop: "0px" }} />
                </div>

                <div style={{ outline: "0px solid #ff0000", transform: "translate(-50%, -65%)", position: "absolute", width: "1050px", height: "420px", left: "50%", top: "50%" }} >
                    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
                        <div className="row">
                            <div className="col-6 ">
                                <div className="match-robot-image match-robot-image-blue" style={{ borderBottom: "none" }}>
                                    <div className="text-start logo shadow px-2 text-white" style={{ position: "relative", display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                                        {props.blueAlliance["teams"][0]}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="match-robot-image match-robot-image-red" style={{ borderBottom: "none" }}>
                                    <div className="text-start logo shadow px-2 text-white" style={{ position: "relative", display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                                        {props.redAlliance["teams"][0]}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="match-robot-image match-robot-image-blue" >
                                    <div className="text-start logo shadow px-2 text-white" style={{ position: "relative", display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                                        {props.blueAlliance["teams"][1]}

                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="match-robot-image match-robot-image-red">
                                    <div className="text-start logo shadow px-2 text-white" style={{ position: "relative", display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                                        {props.redAlliance["teams"][1]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            {/* <ReactTooltip className={`tooltip col-md-10 p-0`} id={props.matchName + "-red"} type='error'>
                <div className="col-md-12 mx-auto col-sm-3">
                    <div className="card card-common">
                        <div className="card-body">
                            {props.scouting !== undefined ? <>
                                <div className="row">
                                    <div className="col">
                                        <MatchStandingsSection division={data[props.redAlliance["teams"][0]]["division"]} />
                                        <MatchStandingsSection division={data[props.redAlliance["teams"][1]]["division"]} />
                                    </div>
                                </div>
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
                                </div>
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
            </ReactTooltip> */}
        </>
    )

}

export default MatchCard;