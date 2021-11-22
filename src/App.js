import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import TeamCard from './cards/TeamCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = require("./teamdata.json")
function App() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="w-100">
              <div className="row pt-md-5">
                {Object.keys(data).map((key, index) => (
                  <TeamCard teamName={data[key]["name"]} number={key} teamCount={Object.keys(data).length} skills={data[key]["skills"]} division={data[key]["division"] !== undefined ? data[key]["division"] : {
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
                  }} />
                ))}

                {/* Cards */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
