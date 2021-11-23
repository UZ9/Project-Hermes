import React from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";

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
                        <Form.Group>
                            <Form.Check style={{width: "200%"}} type="checkbox" label="Can move mobile goals" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Can place mobile goals on platforms" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Can place yellow mobile yellows on platform" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Can move yellow mobile goals" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default ScoutFormComponent;