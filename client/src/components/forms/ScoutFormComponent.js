import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap";
import { socket } from "../../service/Socket";
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
                        <Form.Group className="mt-4" controlId="formBasicCheckbox1">
                            <Form.Check name="full-win-point" type="checkbox" label="Do you have a full winpoint auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox2">
                            <Form.Check name="half-win-point" type="checkbox" label="Do you have a half winpoint auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox3">
                            <Form.Check name="left-auton" type="checkbox" label="Do you have a left auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox4">
                            <Form.Check name="right-auton" type="checkbox" label="Do you have a right auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox5">
                            <Form.Check name="mid-auton" type="checkbox" label="Do you have a middle auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox6">
                            <Form.Check name="consistent-goal-rush" type="checkbox" label="Do you have a consistent goal rush auton?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox7">
                            <Form.Check name="4-motor-drive" type="checkbox" label="Do you have a 4-motor drive?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox8">
                            <Form.Check name="6-motor-drive" type="checkbox" label="Do you have a 6-motor drive?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox9">
                            <Form.Check name="8-motor-drive" type="checkbox" label="Do you have an 8-motor drive?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox10">
                            <Form.Check name="transmission" type="checkbox" label="Does your robot have a transmission?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox11">
                            <Form.Check name="auton-wings" type="checkbox" label="Robot has wings (look at the robot, don't ask)" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox12">
                            <Form.Check name="auton-stick" type="checkbox" label="Robot has a stick (look at the robot, don't ask)" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox13">
                            <Form.Check name="pneumatic-front-clamp" type="checkbox" label="Do you have a pneumatic front clamp?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox14">
                            <Form.Check name="motor-front-clamp" type="checkbox" label="Do you have a motorized front clamp?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox15">
                            <Form.Check name="pneumatic-back-clamp" type="checkbox" label="Do you have a pneumatic back clamp?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox16">
                            <Form.Check name="motor-back-clamp" type="checkbox" label="Do you have a motorized back clamp?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox17">
                            <Form.Check name="scores-rings" type="checkbox" label="Can you score rings?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox18">
                            <Form.Check name="consistent-ring-intake" type="checkbox" label="Is your ring intake consistent?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox19">
                            <Form.Check name="park" type="checkbox" label="Can your robot park?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox20">
                            <Form.Check name="double-park" type="checkbox" label="Can your robot double park?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox21">
                            <Form.Check name="park-with-1-base" type="checkbox" label="Can your robot park with 1 base?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox22">
                            <Form.Check name="park-with-2-base" type="checkbox" label="Can your robot park with 2 bases?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox23">
                            <Form.Check name="park-with-3-base" type="checkbox" label="Can your robot park with 3 bases?" />
                        </Form.Group>
                        <Form.Group className="mt-4" controlId="formBasicCheckbox24">
                            <Form.Check name="park-with-4-base" type="checkbox" label="Can your robot park with 4 bases?" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mt-4 mb-3">
                            <Form.Label>Robot Image</Form.Label>
                            <Form.Control name="robot-image" type="file" />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <button className="w-100 btn mt-3 btn-primary" type="submit">Submit</button>
                        </Form.Group>

                    </Form>

                </div>
            </div>
        </div>

    )
}

export default ScoutFormComponent;