import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import { Popover } from "react-bootstrap";

function getSkillsScoreColor(score) {
    if (score < 30) {
        return "FF0000";
    } else if (score < 60) {
        return "FF8C00";
    } else if (score < 100) {
        return "FFA500"
    } else if (score < 140) {
        return "BFFF00"
    } else if (score < 180) {
        return "EECD00"
    } else {
        return "00A86B"
    }
}

function getIndexScoreColor(score) {


    if (score < 50) {
        return "FF0000";
    } else if (score < 60) {
        return "FF8C00";
    } else if (score < 70) {
        return "FFA500"
    } else if (score < 80) {
        return "BFFF00"
    } else if (score < 90) {
        return "EECD00"
    } else if (score < 100) {
        return "00A86B"
    }
}

class TeamCard extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>

                <div className="col-xl-3 mx-auto col-sm-3 p-2">
                    <div className="card card-common">
                        <div data-tip data-for={this.props.number} className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="text-start text-secondary">
                                    <h5>{this.props.number}</h5>
                                    <h6 className="align-top">{this.props.teamName}</h6>

                                </div>

                            </div>

                            <div className="row col-md-15 text-secondary">
                                <h7 className="col">Index</h7>
                                <h7 className="col">Skills</h7>
                            </div>
                            <div className="row col-md-15 text-secondary">
                                <h3 className="col" style={{ color: `#${getIndexScoreColor(this.props.score)}` }}>{this.props.score}</h3>
                                <h3 className="col">{this.props.skills["programming"] + this.props.skills["driver"]}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactTooltip className="tooltip col-md-3 p-0" id={this.props.number} type='error'>
                    <div className="col-md-10 mx-auto col-sm-3">
                        <div className="card card-common">
                            <div className="card-body">
                                <div className="row text-secondary">
                                    <h6 className="col">Team Number</h6>
                                    <h6 className="col text-end">{this.props.number}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Team Name</h6>
                                    <h6 className="col text-end">{this.props.teamName}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Driver</h6>
                                    <h6 className="col text-end">{this.props.skills["driver"]}</h6>
                                </div>
                                <div className="row text-secondary ">
                                    <h6 className="col">Programming</h6>
                                    <h6 className="col text-end">{this.props.skills["programming"]}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactTooltip>
            </>
        )
    }
}

export default TeamCard;