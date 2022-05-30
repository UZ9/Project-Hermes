import { faBan, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
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
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ms-2 " href="/">
                <span className='ms-2 logo logo-primary '>BWHS</span>
                <span className='logo logo-secondary'>ROBOTICS</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link nav-option">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/scouting" className="nav-link nav-option text-white">Scouting</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/matches" className="nav-link nav-option">Matches<span className="sr-only"></span></Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>

            <div className="container-fluid">
                <div className="row">
                    <div className="w-100">
                        <div className="row">
                            {data.sort((a, b) => ScoutingStatus[b["scouting_status"] ?? "not-started"].value - ScoutingStatus[a["scouting_status"] ?? "not-started"].value).map((element) => (
                                <ScoutingCard key={element["id"]} teamName={element["name"]} number={element["id"]} status={element["scouting_status"] ?? "not-started"} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Scrollbars>
    </div >);
}

export default ScoutingView;