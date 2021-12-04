import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCog } from "@fortawesome/free-solid-svg-icons";
import { ScoutingStatus } from "../views/ScoutingView";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import "../App.css"
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { ScoutingSection } from "./TeamCard";
import ReactTooltip from "react-tooltip";


function ScoutingCard(props) {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleClick = async e => {
        e.preventDefault();

        if (ScoutingStatus[props.status].value <= 0) {
            setShow(true);
        } else {
            goToScoutForm();
        }


    }

    const goToScoutForm = () => {
        navigate(`/scouting/scoutforms/${props.number}`)
    }

    return (
        <>
            <div className="col-xl-3 mx-auto col-sm-5 p-2">
                <div className={`card card-common ${"bg-" + ScoutingStatus[props.status].color}`}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="text-start text-secondary">
                                <h5>{props.number}</h5>
                                <h6 className="align-top">{props.teamName}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-secondary">
                        <FontAwesomeIcon icon={ScoutingStatus[props.status].icon} className="fas fa-sync me-3" />
                        <Button style={{ textDecoration: "none" }} onClick={handleClick} className="text-secondary stretched-link shadow-none scout-card-button" to={`/scouting/scoutforms/${props.number}`}>{ScoutingStatus[props.status].message}</Button>

                    </div>
                </div>
            </div>

            {/* <ReactTooltip className={`tooltip col-md-${props.scouting !== undefined ? 6 : 3} p-0`} id={props.number} type='error'>
                <div className="col-md-10 mx-auto col-sm-3">
                    <div className="card card-common">
                        <div className="card-body">
                            {props.scouting !== undefined ? <>
                                <div className="row">
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
            </ReactTooltip> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>This card identifies as <strong>{ScoutingStatus[props.status].message}</strong>. Are you sure you want to modify it?</Modal.Body>
                <Modal.Footer>
                    <Button className="btn" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn" variant="primary" onClick={goToScoutForm}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ScoutingCard;