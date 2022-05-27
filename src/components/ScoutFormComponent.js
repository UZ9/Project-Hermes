import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "../App.css"
import { socket } from "../service/Socket";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function ScoutFormComponent() {
    let { id } = useParams();
    const navigate = useNavigate();

    let processed = false;

    useEffect(() => {
        return () => {
            // Clear the scouting data status if the user clicks the previous page arrow
            if (!processed) {
                socket.emit("cancel-scouting-data", { team: id });
            }
        }
    })

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const img = formDataObj["robot-image"];

        const imgUploadData = new FormData();
        const api = "5882040c00988288991cbc2df2c1fe06";
        imgUploadData.append("file", img);
        imgUploadData.append("apikey", api);

        // TODO: Start a loading animation here?

        axios.post('https://beeimg.com/api/upload/file/text/', imgUploadData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
            formDataObj["robot-image"] = res.data;


            socket.emit("add-scouting-data", { team: id, data: formDataObj })
    
            processed = true;
    
            navigate("/");
        });




    }

    useEffect(() => {
        socket.emit("begin-scouting-data", { team: id })
    })


    return (
        <div className="col-xl-4 mx-auto col-sm-5 p-2">
            <div className={`card card-common`}>
                <div className="card-body">
                    <h1>Scouting for Team {id}</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox2">
                            <Form.Check name="can-carry-mobo" type="checkbox" label="Can you carry all mobile goals?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox3">
                            <Form.Check name="can-carry-two-mobo" type="checkbox" label="Can you hold two or more mobile goals?" />
                        </Form.Group >
                        <Form.Group className="mt-4" controlId="formBasicCheckbox4">
                            <Form.Check name="can-score-rings" type="checkbox" label="Can you score rings?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox5">
                            <Form.Check name="can-place-mobo-platform" type="checkbox" label="Can you place mobile goals on the platform?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox6">
                            <Form.Check name="can-park" type="checkbox" label="Can you park?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox7">
                            <Form.Check name="can-park-with-mobo" type="checkbox" label="Can you park with mobile goals?" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mt-4 mb-3">
                            <Form.Label>Robot Image</Form.Label>
                            <Form.Control name="robot-image" type="file" />
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