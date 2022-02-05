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
        color: "green",
        value: -1
    }
}

function ScoutingView() {
    const data = useStore(state => state.teamData);

    // data.sort((a, b) => ScoutingStatus[b["status"] ?? "not-started"].value - ScoutingStatus[a["status"] ?? "not-started"].value).map((element) => (
    //     <ScoutingCard teamName={element["name"]} number={element["id"]} status={element["status"] ?? "not-started"}/>
    // ))

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
                            {data.sort((a, b) => ScoutingStatus[b["scouting_status"] ?? "not-started"].value - ScoutingStatus[a["scouting_status"] ?? "not-started"].value).map((element) => (
                                <ScoutingCard teamName={element["name"]} number={element["id"]} status={element["scouting_status"] ?? "not-started"}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default ScoutingView;