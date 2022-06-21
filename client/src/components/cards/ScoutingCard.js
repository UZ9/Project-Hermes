import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScoutingStatus } from "../../views/ScoutingView";
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
            <div className="col-xl-3 mx-auto col-sm-6 p-2">
                <div className={`card card-common ${"bg-" + ScoutingStatus[props.status].color}`}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="text-start text-secondary">
                                <h4 className="subtext">{props.number}</h4>
                                <h6 className="align-top subtext">{props.teamName}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-secondary">
                        <FontAwesomeIcon icon={ScoutingStatus[props.status].icon} className="fas fa-sync me-3" />
                        <button style={{ textDecoration: "none" }} onClick={handleClick} className="text-secondary stretched-link subtext shadow-none scout-card-button" to={`/scouting/scoutforms/${props.number}`}>{ScoutingStatus[props.status].message}</button>

                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>This card identifies as <strong>{ScoutingStatus[props.status].message}</strong>. Are you sure you want to modify it?</Modal.Body>
                <Modal.Footer>
                    <button className="btn" variant="secondary" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn" variant="primary" onClick={goToScoutForm}>
                        Continue
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ScoutingCard;