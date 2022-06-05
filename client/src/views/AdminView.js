
import { Chart as ChartJS, defaults, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, } from 'react-chartjs-2';
import Scrollbars from "react-custom-scrollbars";

import NavbarItems from "../components/NavbarItems";
import NavbarLogo from "../components/NavbarLogo";

import Podium from "../components/Podium";
import PodiumCardList from "../components/PodiumCardList";
import useStore from "../stores/TeamDataStore";

ChartJS.register(ArcElement, Tooltip, Legend);

console.log("Default aimat")
console.log(defaults.animation);

defaults.font.family = "Montserrat, sans-serif"


// defaults.animation = false;

export const inOptions = {
    animation: {
        delay: 1000,
        duration: 3000,
        easing: 'easeOutQuart',
        colors: {
            type: "color",
            duration: 1500,
            from: "transparent",
        }
    },
    legend: {
        display: false,
    },
    title: {
        display: true,
        text: 'Custom Chart Title'
    },
    plugins: {
        title: {
            text: "YEET",
            display: true
        }
    }
}

export const outOptions = {
    animation: {
        delay: 1250,
        duration: 2500,
        easing: 'easeOutQuart',
        // numbers: { duration: 0 },
        colors: {
            type: "color",
            duration: 1500,
            from: "transparent",
        }

    },
    plugins: {
        title: {
            display: true,
            text: 'Doughnut Chart',
            color: 'blue',
            font: {
                size: 34
            },
            padding: {
                top: 30,
                bottom: 30
            },
            responsive: true,
            animation: {
                animateScale: true,
            }
        }
    }
}

export const data1 = {
    labels: ['Not Scouted', 'In Progress', 'Scouted'],
    datasets: [
        {
            label: '# of Votes',
            data: [32, 3, 56],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                '#F4BE90',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgb(231, 121, 23)',

            ],
            borderWidth: 2,
        },
    ],
};

export const data2 = {
    labels: ['Matches Finished', 'Matches Left'],
    datasets: [
        {
            label: '# of Votes',
            data: [205, 0],
            backgroundColor: [
                '#F4BE90',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgb(231, 121, 23)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

export const data3 = {
    labels: ['Not Scouted', 'In Progress', 'Scouted'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#F4BE90',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgb(231, 121, 23)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

export const data4 = {
    labels: ['Not Scouted', 'In Progress', 'Scouted'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#F4BE90',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgb(231, 121, 23)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

function AdminView() {
    // const [show, setShow] = useState(false);


    // const handleClick = async e => {
    //     e.preventDefault();

    //     setShow(true);
    // }

    // const removeScoutingData = () => {
    //     // Send a signal to the server to remove the data.
    //     socket.emit("remove-scouting-data");

    //     setShow(false);
    // }

    const teamData = useStore(state => state.teamData);

    const winners = teamData.sort((a, b) => (a["division"]["ranking"] < b["division"]["ranking"]) ? -1 : 1);


    return (
        <>
            <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
                <NavbarLogo />
                <NavbarItems active="admin" />
            </nav>
            <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                <div className="container-fluid">



                    <div className="row">
                        <div className="col-xl-12 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <h1 className="logo text-center" style={{ color: "#212529" }}>QUALIFICATION RANKINGS</h1>

                                    <div className="d-flex justify-content-between">
                                        <Podium winners={winners} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <h5 className="logo text-center">SCOUTING PROGRESS</h5>
                                    <div className="d-flex justify-content-between">
                                        <Pie data={data1} options={inOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <PodiumCardList winners={winners} />
                        </div>
                        {/* <div className="col-xl-3 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <h5 className="logo text-center">QUALIFICATION MATCHES</h5>

                                    <div className="d-flex justify-content-between">
                                        <Pie data={data2} options={outOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <h5 className="logo text-center">SCOUTING PROGRESS</h5>

                                    <div className="d-flex justify-content-between">
                                        <Pie data={data3} options={outOptions} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-3 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <h5 className="logo text-center">QUALIFICATION MATCHES</h5>

                                    <div className="d-flex justify-content-between">
                                        <Pie data={data2} options={inOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-xl-12 mx-auto col-sm-5 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between"> */}
                        <PodiumCardList winners={winners} />
                        {/* </div>
                                </div>
                            </div>
                        </div> */}
                    </div>


                    {/* <div className="row">
                        <div className="col-4 text-center text-white mx-auto p-2">
                            <button onClick={handleClick} className="btn-block card mx-auto card-common border-danger btn-danger bg-danger p-2">
                                Clear all scouting data
                            </button>
                        </div>
                    </div> */}
                </div>
            </Scrollbars>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>Performing this operation will clear ALL team data. Are you sure you want to continue?</Modal.Body>
                <Modal.Footer>
                    <Button className="btn" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn" variant="danger" onClick={removeScoutingData}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* <div className="row">
                <div className="mx-auto">
                    row
                </div>
            </div> */}



        </>

    );
}

export default AdminView;