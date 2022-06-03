import '../App.css';
import TeamCard from '../cards/TeamCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../stores/TeamDataStore';
import Scrollbars from 'react-custom-scrollbars';
import NavbarLogo from '../components/NavbarLogo';
import NavbarItems from '../components/NavbarItems';

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
  let driverScore = attemptParseInt(skills["driver"]) * 1.2;

  // Programming Skills Score
  let programmingScore = attemptParseInt(skills["programming"]) * 0.3;

  // Record score, calculated using wins and ties
  let winScore = (attemptParseInt(division["wins"]) + attemptParseInt(division["ties"]) * 0.5) * 35;

  // Win points, skill points, and autonomous points need to be factored into the score
  let wpScore = attemptParseInt(division["wp"]) * 30;
  let spScore = attemptParseInt(division["sp"]) * 0.2;
  let apScore = attemptParseInt(division["ap"]) * 2;

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

function CardsView({ isAdmin }) {
  const data = useStore(state => state.teamData);

  console.time("scoreCalculations");

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
        if (val === "on") {
          // Checkbox, full value
          scoutingScore += 10;
        } else if (isNum(val)) {
          scoutingScore += parseInt(scoutingScore)
        }
      }


    }

    // Return the information a card will later need
    return { number: card["id"], scouting: scouting, name: teamName, skills: skills, division: division, score: score, scoutingScore: scoutingScore }
  })).sort((a, b) => { return b.score - a.score; });

  // We use the max score to determine the sorting of the cards
  const maxScore = cards[0] ? cards[0].score : 0;

  console.timeEnd("scoreCalculations");


  // const logOut = () => firebase.auth().signOut();

  return (
    cards.length === 0 ? (
      <div className="loadingio-spinner-eclipse-uzl9l7691o "><div className="ldio-5ki7dfraqbv">
        <div></div>
      </div></div>
    ) : (
      <div style={{ width: "100vw", height: "100vh" }}>
        <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
          <NavbarLogo />
          <NavbarItems active="" />
        </nav>

        <div>
          <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>

            {/* <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}> */}
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

      </div>)
  );
}

export default CardsView;
