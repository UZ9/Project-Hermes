import React from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";

function ScoutFormComponent() {
    let { id } = useParams();

    return (
        <Form>
            <Form.Label>Autonomous Consistency</Form.Label>
            <Form.Range />
            <Form.Label>Autonomous Consistency</Form.Label>
            <Form.Range />
            <Form.Label>Autonomous Consistency</Form.Label>
            <Form.Range />
            <Form.Label>Autonomous Consistency</Form.Label>
            <Form.Range />
        </Form>

    )
}

export default ScoutFormComponent;