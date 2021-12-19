import { Link } from "react-router-dom";
import MatchCard from "../cards/MatchCard";
import useStore from "../stores/TeamDataStore";
import { calculateIndexScore, isNum } from "./CardsView";

function MatchesView() {
    const currentTeam = "33691A"

    let data = useStore(state => state.teamData);

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
            [key]: { scouting: scouting, name: teamName, skills: skills, division: division, score: score, scoutingScore: scoutingScore }
        })
    }));

    const matches = data[currentTeam]["matches"]

    console.log({ matches })

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
            </nav>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        {Object.keys(matches).map((key, index) => (
                            <MatchCard cards={cards} key={index} matchName={key} currentTeam={currentTeam} blueAlliance={matches[key]["blue-alliance"]} redAlliance={matches[key]["red-alliance"]} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MatchesView;