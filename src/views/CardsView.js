import '../App.css';
import TeamCard from '../cards/TeamCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '@firebase/app-compat';
import Button from '@restart/ui/esm/Button';

// The JSON data pulled from the python script
const data = require("../teamdata.json")

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
function calculateIndexScore(skills, division) {
  let output = 0;

  const nums = calculateScores(skills, division);

  // Sum up numbers
  for (let i = 0; i < nums.length; i++) {
    output += nums[i];
  }

  return output.toFixed(1);
}

function CardsView() {
  let cards = (Object.keys(data).map((key) => {
    const teamName = data[key]["name"];
    const skills = data[key]["skills"];

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
    console.log(score);

    // Return the information a card will later need
    return { number: key, name: teamName, skills: skills, division: division, score: score }
  })).sort((a, b) => { return b.score - a.score; });

  // We use the max score to determine the sorting of the cards
  const maxScore = cards[0].score;

  const logOut = () => firebase.auth().signOut();

  return (
    <div>
      <nav class="mb-0 navbar  navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand ms-2" href="/">BWHS Robotics</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link text-white">Home <span class="sr-only"></span></Link>
            </li>
            <li class="nav-item">
              <Link to="/scouting" class="nav-link">Scouting</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button type="button" class="btn btn-sm btn-danger mx-3" onClick={logOut}>Sign Out</Button>
        </div>
      </nav>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="w-100">
              <div className="row">
                {cards.sort((a, b) => { return b.score - a.score; }).map((key, index) => (
                  <TeamCard key={index} maxScore={maxScore} teamName={key.name} number={key.number} score={key.score} skills={key.skills} division={key.division} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardsView;
