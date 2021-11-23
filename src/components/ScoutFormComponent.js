import React from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "../App.css"

function ScoutFormComponent() {
    let { id } = useParams();

    return (
        <div className="col-xl-4 mx-auto col-sm-5 p-2">
            <div className={`card card-common`}>
                <div className="card-body">
                    <Form>
                        <Form.Group>
                            <Form.Label>Autonomous Consistency </Form.Label>
                            <Form.Range min={0} max={5} />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Can move mobile goals" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox2">
                            <Form.Check type="checkbox" label="Can place mobile goals on platforms" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox3">
                            <Form.Check type="checkbox" label="Can place yellow mobile yellows on platform" />
                        </Form.Group >
                        <Form.Group className="mt-4" controlId="formBasicCheckbox4">
                            <Form.Check type="checkbox" label="Can move yellow mobile goals" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox5">
                            <Form.Check type="checkbox" label="Can park" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox6">
                            <Form.Check type="checkbox" label="Can park with mobile goals" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox7">
                            <Form.Label>Amount of mobile goals they can park with</Form.Label>
                            <Form.Control type="text" placeholder="Put number here"/>
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Button className="w-100 btn mt-3 btn-primary" type="button">Submit</Button>
                        </Form.Group>
                    </Form>
                    
                </div>
            </div>
        </div>

    )
}

export default ScoutFormComponent;