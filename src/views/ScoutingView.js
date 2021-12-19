import { faBan, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import ScoutingCard from "../cards/ScoutingCard";
import useStore from "../stores/TeamDataStore";

export const ScoutingStatus = {
    "not-started": {
        icon: faBan,
        message: "Not Started",
        color: "white",
        value: 1
    },
    "in-progress": {
        icon: faCog,
        message: "In Progress",
        color: "warning",
        value: 0
    },
    "done": {
        icon: faCheck,
        message: "Done",
        color: "success",
        value: -1
    }
}

function ScoutingView() {
    const data = useStore(state => state.teamData);

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
                    <li class="nav-item">
                        <Link to="/matches" class="nav-link">Matches<span class="sr-only"></span></Link>
                    </li>
                </ul>
            </div>
        </nav>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="w-100">
                        <div className="row">
                            {Object.keys(data).sort((a, b) => ScoutingStatus[data[b]["status"]].value - ScoutingStatus[data[a]["status"]].value).map((key, index) => (
                                <ScoutingCard teamName={data[key]["name"]} number={key} status={data[key]["status"]}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default ScoutingView;