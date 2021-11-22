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
                  <TeamCard teamName={data[key]["name"]} number={key} score={(Math.random() * 100).toFixed(1)} skills={data[key]["skills"]}/>
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
