import '../App.css';
import TeamCard from '../cards/TeamCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '@firebase/app-compat';
import Button from '@restart/ui/esm/Button';
import Scrollbars from 'react-custom-scrollbars';
import useStore from '../stores/TeamDataStore';

/**
 * Attempts to parse a string for an integer
 *  
 * @param {String} val 
 * @returns The integer if parsed correctly, otherwise 0 
 */
function attemptParseInt(val) {
  return parseInt(val) || 0;
}

function calculateScores(skills, division) {
  // Driving Skills Score
  let driverScore = attemptParseInt(skills["driver"]) * 0.6;

  // Programming Skills Score
  let programmingScore = attemptParseInt(skills["programming"]) * 0.6;

  // Record score, calculated using wins and ties
  let winScore = (attemptParseInt(division["wins"]) + attemptParseInt(division["ties"]) * 0.5) * 35;

  // Win points, skill points, and autonomous points need to be factored into the score
  let wpScore = attemptParseInt(division["wp"]) * 30;
  let spScore = attemptParseInt(division["sp"]) * 0.2;
  let apScore = attemptParseInt(division["ap"]);

  return [driverScore, programmingScore, winScore, apScore, wpScore, spScore];
}

/**
 * Calculates the Index Score of a team given its various attributes
 * 
 * @param {Object} skills The skills data pulled from the JSON file
 * @param {Object} division The division data pulled from the JSON file
 * @returns the Index Score of the team
 */
export function calculateIndexScore(skills, division) {
  let output = 0;

  const nums = calculateScores(skills, division);

  // Sum up numbers
  for (let i = 0; i < nums.length; i++) {
    output += nums[i];
  }

  return output.toFixed(1);
}

export function isNum(num) {
  return !isNaN(parseInt(num)) && !isNaN(num - 0);
}

function CardsView({isAdmin}) {
  const data = useStore(state => state.teamData);

  console.log({data});

  let cards = (data.map((card) => {
    const teamName = card["name"];
    const skills = card["skills"];
    const scouting = card["scouting"];

    // If no division waas found (e.g. if they didn't participate) create a default division schema
    const division = card["division"] !== undefined ? card["division"] : {
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
    const score = calculateIndexScore(card["skills"], division);

    let scoutingScore = 0;

    for (const key in scouting) {
      const val = scouting[key];

      if (val !== undefined) {
        console.log(`Val is ${val}`);

        if (val === "on") {
          // Checkbox, full value
          scoutingScore += 10;
          console.log("e");
        } else if (isNum(val)) {
          console.log(`Found ${val}`);
          scoutingScore += parseInt(scoutingScore)
        }
      }


    }

    console.log(`Ended with a score of ${scoutingScore}`);

    // Return the information a card will later need
    return { number: card["id"], scouting: scouting, name: teamName, skills: skills, division: division, score: score, scoutingScore: scoutingScore }
  })).sort((a, b) => { return b.score - a.score; });

  // We use the max score to determine the sorting of the cards
  const maxScore = cards[0] ? cards[0].score : 0;

  const logOut = () => firebase.auth().signOut();

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ms-2" href="/">BWHS Robotics</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-white">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link to="/scouting" className="nav-link">Scouting</Link>
            </li>
            <li class="nav-item">
              <Link to="/matches" class="nav-link">Matches<span class="sr-only"></span></Link>
            </li>
            {isAdmin ?
            <li class="nav-item">
              <Link to="/admin" class="nav-link">Admin<span class="sr-only"></span></Link>
            </li>
            : <></>}
          </ul>
        </div>
        <div>
          <Button type="button" className="btn-danger btn btn-sm  mx-3" onClick={logOut}>Sign Out</Button>
        </div>
      </nav>

      <div>

        <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
          <div className="container-fluid">
            <div className="row">
              <div className="w-100">
                <div className="row">

                  {cards.sort((a, b) => { return b.score - a.score; }).map((key, index) => (
                    <TeamCard key={index} maxScore={maxScore} teamName={key.name} number={key.number} scoutingScore={key.scoutingScore} scouting={key.scouting} score={key.score} skills={key.skills} division={key.division} />
                  ))}


                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>

    </div>
  );
}

export default CardsView;
