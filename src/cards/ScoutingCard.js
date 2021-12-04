import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScoutingStatus } from "../views/ScoutingView";
import Button from "@restart/ui/esm/Button";
import "../App.css"
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { useState } from "react";


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