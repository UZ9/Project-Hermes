import { Button, Col, Form } from "react-bootstrap";
import MatchCard from "../components/cards/MatchCard";
import useStore from "../stores/TeamDataStore";
import { calculateIndexScore, isNum } from "../components/display/TeamCardList";
import { Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css'
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import NavbarItems from "../components/navbar/NavbarItems";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import MatchesNavbar from "../components/matches/MatchesNavbar";
import "./MatchesView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry, faCheck, faCheckCircle, faCircle, faSearch, faShower, faTrophy } from "@fortawesome/free-solid-svg-icons";

function MatchesView() {
    // const currentTeam = "21050A"

    const [data, currentTeam] = useStore(state => [state.teamData, state.currentTeam]);

    const [currentTeamInput, setCurrentTeamInput] = useState(currentTeam);

    const [currentMatch, setCurrentMatch] = useState("");

    let allMatches = {};

    console.log("Starting");

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


        // Add matches to allMatches list
        data[key]["matches"].forEach(match => {
            let currentInput = currentTeamInput[0];

            if (currentInput === undefined || currentInput.length === 0
                || currentInput === match[1]["red-alliance"]["teams"][0]
                || currentInput === match[1]["red-alliance"]["teams"][1]
                || currentInput === match[1]["blue-alliance"]["teams"][0]
                || currentInput === match[1]["blue-alliance"]["teams"][1]
            )
                allMatches[match[0]] = match[1];
        })

        // Calculate the index score of the team
        const score = calculateIndexScore(data[key]["skills"], division);

        let scoutingScore = 0;

        for (const key in scouting) {
            const val = scouting[key];

            if (val !== undefined) {

                if (val === "on") {
                    // Checkbox, full value
                    scoutingScore += 10;
                } else if (isNum(val)) {
                    scoutingScore += parseInt(scoutingScore)
                }
            }


        }

        // Return the information a card will later need
        return ({
            [data[key]["id"]]: { scouting: scouting, id: data[key]["id"], name: teamName, skills: skills, division: division, score: score, scoutingScore: scoutingScore }
        })
    }));

    console.log("Done");

    const handleSubmit = () => {
        useStore.setState({ currentTeam: currentTeamInput[0] });
    }

    // let matches = data.find(element => element.id === currentTeam)
    // let matches = data.find(element => element.);

    console.log({ allMatches })
    console.log({ currentMatch })

    let matches = data;
    console.log({ matches });



    if (matches === undefined) {
        matches = []
    } else {
        // TODO: Fix odd nesting of matches
        // matches = matches["matches"];
    };


    const teamList = data.map(element => element["id"]);

    const onMatchClick = (e) => {
        console.log(e.target.id);
        setCurrentMatch(e.target.id);
    }

    const currentMatchFiltered = Object.keys(allMatches).find(m => m === currentMatch);

    console.log(currentMatchFiltered)

    return (
        data.length === 0 ?
            <>
                <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="" />
                </nav>

                <LoadingAnimation />
            </> :
            <div>
                <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark shadow">
                    <NavbarItems active="matches" />

                </nav>

                <div className="container-fluid">
                    <div className="row flex-nowrap" >

                        <MatchesNavbar />

                        <div className="px-0 col-md-12 col-xl-3">
                            <div className="nav-matches flex-column align-items-center align-items-sm-start">
                                <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                                    <ul className="navbar-dark navbar-nav  nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start" id="menu">
                                        <div className="col-12">
                                            <div className="custom-dropdown">
                                                <FontAwesomeIcon size={"lg"} className="custom-dropdown-icon" icon={faSearch} style={{
                                                    textAlign: "center",
                                                    width: "16px",
                                                    lineHieght: "10px",
                                                    zIndex: 1,
                                                    color: "#ededed"
                                                }} />
                                                <Typeahead className=" pt-1 pt-sm-0 p-sm-0 px-4 ms-0" renderMenu={(results, menuProps) => (
                                                    <Menu {...menuProps}>
                                                        <Scrollbars autoHeight>
                                                            {results.map((result, index) => (
                                                                <MenuItem option={result} position={index}>
                                                                    <span className="text-white subtext">
                                                                        {result}

                                                                    </span>
                                                                </MenuItem>
                                                            ))}
                                                        </Scrollbars>

                                                    </Menu>
                                                )}
                                                    inputProps={{ className: "py-2 my-1 shadow subtext text-white", style: { fontSize: "20px", backgroundColor: 'transparent', border: "none" } }}
                                                    onChange={setCurrentTeamInput}
                                                    placeholder={"Filter by Team ID"}
                                                    labelKey={"team-selection"}
                                                    id="team-selection"
                                                    highlightOnlyResult={false}
                                                    type="text"
                                                    options={teamList}
                                                    defaultInputValue={currentTeamInput + ""} />
                                            </div>

                                        </div>
                                        {/* <Button className="btn btm-sm mt-3 mt-sm-0 signout-btn col-4" onClick={handleSubmit} >Set Team</Button> */}

                                        {(matches.length !== 0) ? Object.keys(allMatches).map((key, index) => {

                                            const blueScore = allMatches[key]["blue-alliance"]["score"];
                                            const redScore = allMatches[key]["red-alliance"]["score"];

                                            const victor = redScore === blueScore ? "N/A" : redScore > blueScore ? "Red" : "Blue";

                                            const victorColor = redScore === blueScore ? "#cccccc" : redScore < blueScore ? "#4d7df2" : "tomato";

                                            return (<>
                                                <div className="col-12 position-relative">
                                                    <div className="card-matches pe-1">
                                                        <div className="card-body shadow" style={{}}>

                                                            <div className="row me-1 me-md-0">
                                                                <div className="col-8">
                                                                    <div className="d-flex justify-items-between">
                                                                        <span className="fa-layers fa-fw fa-3x me-3">
                                                                            <FontAwesomeIcon icon={faCircle} style={{ color: victorColor }} opacity={0.2} />
                                                                            <FontAwesomeIcon icon={faCircle} style={{ color: victorColor }} opacity={0.7} inverse transform="shrink-4" />
                                                                            <FontAwesomeIcon icon={faTrophy} style={{ color: "#ededed" }} opacity={0.9} inverse transform="shrink-10" />
                                                                        </span>

                                                                        <button id={key} style={{ textDecoration: "none" }} onClick={(e) => { onMatchClick(e) }} className="stretched-link text-secondary shadow-none scout-card-button subtext"><h4 className="subtext text-white">{key}</h4></button>


                                                                    </div>
                                                                </div>

                                                                <div className="col-4 p-0">
                                                                    <table className="table mb-0 text-white subtext" style={{ width: "100%", border: "none" }}>
                                                                        <tbody>
                                                                            <tr className="d-flex">
                                                                                <td style={{ color: "tomato", border: "none" }} className={"subtext px-0 col-4 me-1 " + (victor === "Red" ? "text-decoration-underline" : "")}><h4>{redScore}</h4></td>
                                                                                <td style={{ color: "#ededed", border: "none" }} className="subtext px-0 col-3 ">{<h4>{"-"}</h4>}</td>
                                                                                <td style={{ color: "#5973ff", border: "none" }} className={"subtext px-0 col-3 " + (victor === "Blue" ? "text-decoration-underline" : "")}><h4>{blueScore}</h4></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>

                                                                    {/* <h4 className="d-flex align-center justify-content-evenly mt-2 logo text-white  text-start me-3">
                                                                        <h4 style={{ color: "tomato" }}>{redScore}</h4>
                                                                        <span> - </span>
                                                                        <span style={{ color: "#5973ff" }}>{blueScore}</span>

                                                                    </h4> */}
                                                                    {/* <h4 className="mt-1 subtext text-white">{"928-838"}</h4> */}
                                                                </div>

                                                            </div>





                                                        </div>
                                                    </div>
                                                </div>


                                            </>)

                                        }) : undefined}
                                    </ul>
                                </Scrollbars>
                            </div>
                        </div>

                        <div className="col-xl-9 px-0">
                            <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                                <div >
                                    <div className="row mt-3 mx-3">
                                        {



                                            (matches.length !== 0) ?
                                                (currentMatchFiltered !== undefined ? (
                                                    <MatchCard cards={cards} matchName={currentMatchFiltered} currentTeam={currentTeam} blueAlliance={allMatches[currentMatchFiltered]["blue-alliance"]} redAlliance={allMatches[currentMatchFiltered]["red-alliance"]} />

                                                ) : undefined) :
                                                <>
                                                    <LoadingAnimation error={"NoTeamSelected"} />
                                                </>}
                                    </div>
                                </div>
                            </Scrollbars>
                        </div>

                    </div>
                </div>
            </div>
    );
}

export default MatchesView;