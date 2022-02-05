import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form } from "react-bootstrap";
import axios from "axios";
import Button from "@restart/ui/esm/Button";

function LoginView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async e => {
        e.preventDefault();

        const user = { username, password }

        const response = await axios.post(
            "https://project-hermes-express-backend.herokuapp.com/login",
            user
        )
    };


    return (
        <div>
            <div className="row">
                <Form className="col" onSubmit={handleSubmit}>
                    <Form.Group className="mt-3 mb-3 mx-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={({ target }) => setUsername(target.value)} type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            We'll always share your username with everyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="pt-2 mb-3 mx-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={({ target }) => setPassword(target.value)} type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                            *wink*
                        </Form.Text>
                    </Form.Group>
                    <Button className="mx-3 btn btn-dark" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginView;