import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import MatchCard from "../cards/MatchCard";
import useStore from "../stores/TeamDataStore";
import { calculateIndexScore, isNum } from "./CardsView";
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { useState } from "react";
import shallow from 'zustand/shallow'
import Scrollbars from "react-custom-scrollbars";

function MatchesView() {
    // const currentTeam = "21050A"

    const [data, currentTeam] = useStore(state => [state.teamData, state.currentTeam]);

    const [currentTeamInput, setCurrentTeamInput] = useState(currentTeam);

    console.log("Updating");

    let cards = Object.assign({}, ...Object.keys(data).map((key) => {
        const teamName = data[key]["name"];
        const skills = data[key]["skills"];
        const scouting = data[key]["scouting"];

        // If no division waas found (e.g. if they didn't participate) create a default division schema
        const division = data[key]["division"] !== undefined ? data[key]["division"] : {
            "ranking": "N/A",
            "wins": 0,
            "losses": 0,
            "ties": 0,
            "wp": 0,
            "ap": 0,
            "sp": 0,
            "high_score": 0,
            "average_points": 0,
            "total_points": 0
        };

        // Calculate the index score of the team
        const score = calculateIndexScore(data[key]["skills"], division);

        let scoutingScore = 0;

        for (const key in scouting) {
            const val = scouting[key];

            if (val !== undefined) {

                if (val === "on") {
                    // Checkbox, full value
                    scoutingScore += 10;
                    console.log("e");
                } else if (isNum(val)) {
                    scoutingScore += parseInt(scoutingScore)
                }
            }


        }

        console.log(`Ended with a score of ${scoutingScore}`);

        // Return the information a card will later need
        return ({
            [data[key]["id"]]: { scouting: scouting, id: data[key]["id"], name: teamName, skills: skills, division: division, score: score, scoutingScore: scoutingScore }
        })
    }));

    const handleSubmit = () => {
        console.log(currentTeamInput[0])

        useStore.setState({ currentTeam: currentTeamInput[0] });
    }

    console.log({ currentTeam })
    console.log({ data });
    console.log((currentTeam in data));

    let matches = data.find(element => element.id === currentTeam)

    if (matches === undefined) {
        matches = []
    } else {
        // TODO: Fix odd nesting of matches
        matches = matches["matches"];
    };


    // const matches =  ? data[currentTeam]["matches"] : []

    console.log({ matches })

    const teamList = data.map(element => element["id"]);

    return (
        <div>
            <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ms-2" href="/">BWHS Robotics</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/scouting" className="nav-link">Scouting</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/matches" class="nav-link text-white">Matches<span class="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
                <Typeahead className="me-2 p-0" onChange={setCurrentTeamInput} placeholder={"Team ID"} labelKey={"team-selection"} id="team-selection" highlightOnlyResult={false} type="text" options={teamList} defaultInputValue={currentTeamInput}/>
                <Button className="btn btm-sm btn-primary me-3" onClick={handleSubmit} >Set Team</Button>
            </nav>
                <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                    <div className="container-fluid">
                        <div className="row">
                            {(matches.length !== 0) ?
                                Object.keys(matches).map((key, index) => (
                                    <MatchCard cards={cards} key={index} matchName={key} currentTeam={currentTeam} blueAlliance={matches[key]["blue-alliance"]} redAlliance={matches[key]["red-alliance"]} />
                                )) :
                                <>
                                    <div className="col-xl-3 mx-auto col-sm-5 p-2">
                                        <div className={`card card-common`}>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-start text-secondary">
                                                        <h5 className="text-danger">No team selected.</h5>
                                                        <h6 className="align-top">Make sure you have selected a valid team from the Team ID selection..</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>}
                        </div>
                    </div>
                </Scrollbars>
        </div>
    );
}

export default MatchesView;