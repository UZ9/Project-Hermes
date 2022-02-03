import { faBan, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import ScoutingCard from "../cards/ScoutingCard";
import useStore from "../stores/TeamDataStore";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function AdminView() {
    console.log("rddd");

    return (
        <>
            <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ms-2" href="/">BWHS Robotics</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/scouting" className="nav-link">Scouting</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/matches" class="nav-link">Matches<span class="sr-only"></span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin" class="nav-link text-white">Admin<span class="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="row">
                <div className="col-xl-4 mx-auto col-sm-5 p-2">
                    <div className="card card-common">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <Pie data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 mx-auto col-sm-5 p-2">
                    <div className="card card-common">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <Pie data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 mx-auto col-sm-5 p-2">
                    <div className="card card-common">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <Pie data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
}

export default AdminView;