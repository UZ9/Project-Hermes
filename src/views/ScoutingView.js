import React from "react";
import { Link } from "react-router-dom";
import ScoutingCard from "../cards/ScoutingCard";

// The JSON data pulled from the python script
const data = require("../teamdata.json")

export const ScoutingStatus = {
    NotStarted: 'Not Started',
    InProgress: 'In Progress'
}

function ScoutingView() {
    return (<div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ms-2" href="/">BWHS Robotics</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/scouting" class="nav-link text-white">Scouting</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="w-100">
                        <div className="row">
                            {Object.keys(data).map((key, index) => (
                                <ScoutingCard teamName={data[key]["name"]} number={key} status={Math.random() > 0.2 ? ScoutingStatus.NotStarted : ScoutingStatus.InProgress}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default ScoutingView;