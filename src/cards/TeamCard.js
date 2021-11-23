import React from "react";
import ReactTooltip from "react-tooltip";

function getIndexScoreColor(score, maxScore) {
    console.log(maxScore)

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

class TeamCard extends React.Component {
    render() {
        return (
            <>
                <div className="col-xl-3 mx-auto col-sm-5 p-2">
                    <div className="card card-common">
                        <div data-tip data-for={this.props.number} className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="text-start text-secondary">
                                    <h5>{this.props.number}</h5>
                                    <h6 className="align-top">{this.props.teamName}</h6>

                                </div>

                            </div>

                            <div className="row col-md-15 text-secondary">
                                <span className="col">Index</span>
                                <span className="col">Rank</span>
                                <span className="col">Skills</span>
                            </div>
                            <div className="row col-md-15 text-secondary">
                                <h3 className="col" style={{ color: `#${getIndexScoreColor(this.props.score, this.props.maxScore)}` }}>{this.props.score}</h3>
                                <h3 className="col">#{this.props.division["ranking"]}</h3>
                                <h3 className="col">{this.props.skills["programming"] + this.props.skills["driver"]}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactTooltip className="tooltip col-md-3 p-0" id={this.props.number} type='error'>
                    <div className="col-md-10 mx-auto col-sm-3">
                        <div className="card card-common">
                            <div className="card-body">
                                <h5 className="text-center text-primary">Team Information</h5>
                                <div className="row text-secondary">
                                    <h6 className="col">Team Number</h6>
                                    <h6 className="col text-end">{this.props.number}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Team Name</h6>
                                    <h6 className="col text-end">{this.props.teamName}</h6>
                                </div>
                                <h5 className="text-center text-primary">Current Match Standings</h5>
                                <div className="row text-secondary ">
                                    <h5 className="col text-center">
                                        <span className="text-success">{this.props.division["wins"]}</span>
                                        <span className="text-secondary"> - </span>
                                        <span className="text-danger">{this.props.division["losses"]}</span>
                                        <span className="text-secondary"> - </span>
                                        <span className="text-secondary">{this.props.division["ties"]}</span>
                                    </h5>
                                </div>
                                <div className="row text-secondary ">
                                    <h6 className="fw-bold col">Rank</h6>
                                    <h6 className="fw-bold col text-end">#{this.props.division["ranking"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Win Points</h6>
                                    <h6 className="col text-end">{this.props.division["wp"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Auton Points</h6>
                                    <h6 className="col text-end">{this.props.division["ap"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Skills Points</h6>
                                    <h6 className="col text-end">{this.props.division["sp"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">High Score</h6>
                                    <h6 className="col text-end">{this.props.division["high_score"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Average Score</h6>
                                    <h6 className="col text-end">{this.props.division["average_points"]}</h6>
                                </div>
                                <div className="row text-secondary">
                                    <h6 className="col">Total Score</h6>
                                    <h6 className="col text-end">{this.props.division["total_points"]}</h6>
                                </div>
                                <h5 className="text-center text-primary">Skills Scores</h5>
                                <div className="row text-secondary">
                                    <h6 className="col">Driver</h6>
                                    <h6 className="col text-end">{this.props.skills["driver"]}</h6>
                                </div>
                                <div className="row text-secondary ">
                                    <h6 className="col">Programming</h6>
                                    <h6 className="col text-end">{this.props.skills["programming"]}</h6>
                                </div>
                                <div className="row text-secondary ">
                                    <h6 className="col">World Ranking</h6>
                                    <h6 className="col text-end">{this.props.skills["world-rank"]}</h6>
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