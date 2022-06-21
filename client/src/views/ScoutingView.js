import { faBan, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import ScoutingCard from "../cards/ScoutingCard";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import NavbarItems from "../components/navbar/NavbarItems";
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

    return (

        data.length === 0 ?
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="scouting" />
                </nav>
                <LoadingAnimation />

            </> :

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="scouting" />
                </nav>
                <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>

                    <div className="container-fluid">
                        <div className="row px-1">
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