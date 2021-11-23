import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCog } from "@fortawesome/free-solid-svg-icons";
import { ScoutingStatus } from "../views/ScoutingView";
import { Link } from "react-router-dom";


class ScoutingCard extends React.Component {
    render() {
        return (
            <>
                <div className="col-xl-3 mx-auto col-sm-5 p-2">
                    <div className={`card card-common ${this.props.status === ScoutingStatus.InProgress ? "bg-warning" : ""}`}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="text-start text-secondary">
                                    <h5>{this.props.number}</h5>
                                    <h6 className="align-top">{this.props.teamName}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-secondary">
                            <FontAwesomeIcon icon={this.props.status === ScoutingStatus.NotStarted ? faBan : faCog} className="fas fa-sync me-3" />
                            {this.props.status === ScoutingStatus.NotStarted ? (
                                <Link style={{ textDecoration: "none" }} className="text-secondary stretched-link" to={`/scouting/scoutforms/${this.props.number}`}>{this.props.status}</Link>
                            ) : (
                                <span>{this.props.status}</span>
                            )}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ScoutingCard;