import React from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import "../App.css"
import { socket } from "../service/Socket";
import { useNavigate } from "react-router-dom"



function ScoutFormComponent() {
    let { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        console.log("Sending data")
        socket.emit("add-scouting-data", { team: id, data: formDataObj })

        navigate("/");


    }

    socket.emit("begin-scouting-data", { team: id })

    return (
        <div className="col-xl-4 mx-auto col-sm-5 p-2">
            <div className={`card card-common`}>
                <div className="card-body">
                    <h1>Scouting for Team {id}</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Autonomous Consistency </Form.Label>
                            <Form.Range name="auton-consistency" min={0} max={5} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Autonomous Compatibility </Form.Label>
                            <Form.Range name="auton-compatibility" min={0} max={5} />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox">
                            <Form.Label>Amount of points their match auton can do:</Form.Label>
                            <Form.Control name="auton-match-points" type="text" placeholder="Put number here" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox2">
                            <Form.Check name="can-place-mobo-on-platform" type="checkbox" label="Can place mobile goals on platforms" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox3">
                            <Form.Check name="can-place-yellow-mobo-on-platform" type="checkbox" label="Can place yellow mobile yellows on platform" />
                        </Form.Group >
                        <Form.Group className="mt-4" controlId="formBasicCheckbox4">
                            <Form.Check name="can-move-yellow-mobile-goals" type="checkbox" label="Can move yellow mobile goals" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox5">
                            <Form.Check name="can-park" type="checkbox" label="Can park" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox7">
                            <Form.Label>Amount of mobile goals they can park with:</Form.Label>
                            <Form.Control name="mobo-park-count" type="text" placeholder="Put number here" />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Button className="w-100 btn mt-3 btn-primary" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>

                </div>
            </div>
        </div>

    )
}

export default ScoutFormComponent;