
import { Chart as ChartJS, defaults, ArcElement, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion/dist/framer-motion'
import Scrollbars from "react-custom-scrollbars";

import NavbarItems from "../components/NavbarItems";

import Podium from "../components/Podium";
import useStore from "../stores/TeamDataStore";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { useRef } from 'react';
import LoadingAnimation from '../components/loading/LoadingAnimation';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, BarElement);

defaults.font.family = "Jura, sans-serif"
defaults.font.opacity = 1.0
defaults.font.weight = "bold"


// defaults.animation = false;

export const barOptions = {
    maintainAspectRatio: false,
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
    },
    // maintainAspectRatio: false
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


export const skillsData1 = {
    labels: ['44691R', '98548E', '4082B'],
    datasets: [
        {
            label: 'DRIVER',
            data: [355, 371, 350],
            backgroundColor: 'rgba(231,121,23, 0.75)',
        },
        {
            label: 'PROGRAMMING',
            data: [266, 247, 220],
            backgroundColor: 'rgba(255,204,86, 0.75)',
        },
    ],

}

export const skillsData2 = {
    labels: ['44691R', '98548E', '4082B'],
    datasets: [
        {
            label: 'DRIVER',
            data: [1, 2, 2],
            backgroundColor: 'rgba(231,121,23, 0.75)',
        },
        {
            label: 'PROGRAMMING',
            data: [3, 3, 1],
            backgroundColor: 'rgba(255,204,86, 0.75)',
        },
    ],

}


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

    const carouselKeys = [useState(""), useState("")];

    const carouselRef = useRef();
    const slide1Ref = useRef();
    const slide2Ref = useRef();


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



    const qualRankings = [...teamData.sort((a, b) => (a["division"]["ranking"] < b["division"]["ranking"]) ? -1 : 1)];
    const skillsRankings = teamData.sort((a, b) => ((a["skills"]["programming"] + a["skills"]["driver"]) > (b["skills"]["programming"] + b["skills"]["driver"])) ? -1 : 1);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        teamData.length === 0 ? (
            <>
                <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="" />
                </nav>

                <LoadingAnimation />
            </>
        ) :
            <>
                <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="admin" />
                </nav>

                <Carousel draggable={false} shouldResetAutoplay={false} autoPlay={false} ref={(el) => (carouselRef.current = el)} beforeChange={e => {
                    carouselKeys[e][1](carouselKeys[e][0] + "a");

                }}
                    responsive={responsive}>
                    <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                        <div className='container-fluid' ref={slide1Ref} key={carouselKeys[0][0]}>

                            <div className="row mb-1">
                                <div className="col-xl-12 px-2 mx-auto col-sm-5">
                                    <div className="card card-common pb-1"> 
                                        <div className="card-body">
                                            <h1 className="logo text-center py-4" style={{ color: "#212529" }}>TOP 16 QUALIFICATION RANKINGS</h1>

                                            {/* <TeamCardList limit={16} sort={(a, b) => { return a.division.ranking - b.division.ranking }} /> */}
                                            <Podium winners={qualRankings} podiumOffset={(value) => value / 1.3} winnerValueFunc={(winner) => winner["division"]["ranking"]} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 mx-auto col-sm-5 pt-2 px-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <h3 className="subtext text-center">SCOUTING PROGRESS</h3>
                                            <div style={{ height: "40.25vh", position: "relative" }}>
                                                <Pie data={data1} options={{ ...inOptions, maintainAspectRatio: false }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="w-100">
                                            <div className="row">
                                                <motion.div
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: '.25rem',
                                                        fontFamily: "Audiowide, cursive",
                                                    }}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        visible: () => ({
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {
                                                                delay: 1,
                                                                duration: 1.5,
                                                                ease: 'backInOut'
                                                            }
                                                        }),
                                                        hidden: { opacity: 0, y: -25 }
                                                    }}
                                                    className="col-xl-6 mx-auto col-sm-5 p-2 pb-0 pt-0"
                                                >
                                                    <div className="card card-common">
                                                        <div className="card-body">
                                                            <h3 className='align-middle text-center subtext'>
                                                                HIGHEST AVERAGE SCORE
                                                            </h3>
                                                            <h1 className='logo py-4 text-center logo-primary'>
                                                                178
                                                            </h1>
                                                            <h4 className='subtext text-center'>
                                                                4082B
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: '.25rem',
                                                        fontFamily: "Audiowide, cursive",
                                                    }}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        visible: () => ({
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {
                                                                delay: 1,
                                                                duration: 1.5,
                                                                ease: 'backInOut'
                                                            }
                                                        }),
                                                        hidden: { opacity: 0, y: -25 }
                                                    }}
                                                    className="col-xl-6 mx-auto col-sm-5 p-2"
                                                >
                                                    <div className="card card-common">
                                                        <div className="card-body">
                                                            <h3 className='align-middle text-center subtext'>
                                                                HIGHEST SCORE
                                                            </h3>
                                                            <h1 className='logo py-4 text-center logo-primary'>
                                                                Q56 - 263
                                                            </h1>
                                                            <h4 className='subtext text-center'>
                                                                603B, 4082B
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: '.25rem',
                                                        fontFamily: "Audiowide, cursive",
                                                    }}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        visible: () => ({
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {
                                                                delay: 1.2,
                                                                duration: 1.5,
                                                                ease: 'backInOut'
                                                            }
                                                        }),
                                                        hidden: { opacity: 0, y: -25 }
                                                    }}
                                                    className="col-xl-6 mx-auto col-sm-5 p-2"
                                                >
                                                    <div className="card card-common">
                                                        <div className="card-body">
                                                            <h3 className='align-middle text-center subtext'>
                                                                HIGHEST AP
                                                            </h3>
                                                            <h1 className='logo py-4 text-center logo-primary'>
                                                                51
                                                            </h1>
                                                            <h4 className='subtext text-center'>
                                                                197D
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: '.25rem',
                                                        fontFamily: "Audiowide, cursive",
                                                    }}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        visible: () => ({
                                                            opacity: 1,
                                                            y: 0,
                                                            transition: {
                                                                delay: 1.2,
                                                                duration: 1.5,
                                                                ease: 'backInOut'
                                                            }
                                                        }),
                                                        hidden: { opacity: 0, y: -25 }
                                                    }}
                                                    className="col-xl-6 mx-auto col-sm-5 p-2"
                                                >
                                                    <div className="card card-common">
                                                        <div className="card-body">
                                                            <h3 className='align-middle text-center subtext'>
                                                                HIGHEST SP
                                                            </h3>
                                                            <h1 className='logo py-4 text-center logo-primary'>
                                                                1299
                                                            </h1>
                                                            <h4 className='subtext text-center'>
                                                                4478E
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 mx-auto col-sm-5 pt-2 px-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <h3 className="subtext text-center">QUALIFICATION MATCHES</h3>

                                            <div style={{ height: "40.25vh", position: "relative" }}>
                                                <Pie data={data2} options={{ ...inOptions, maintainAspectRatio: false }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row">
                                <PodiumCardList winners={qualRankings} />
                            </div> */}
                        </div>
                    </Scrollbars>
                    <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
                        <div ref={slide2Ref} key={carouselKeys[1][0]} className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 mx-auto col-sm-5 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <h1 className="logo text-center" style={{ color: "#212529" }}>SKILLS RANKINGS</h1>

                                            <div className="d-flex justify-content-between">
                                                <Podium winners={skillsRankings} podiumOffset={(value) => value / 1.3} winnerValueFunc={(winner) => winner["skills"]["programming"] + winner["skills"]["driver"]} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 mx-auto col-sm-5 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <h3 className="subtext text-center">TOP 3 SKILLS SCORES</h3>
                                            <div className="d-flex justify-content-between">
                                                <Bar height={415} data={skillsData1} options={barOptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 mx-auto col-sm-5 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <h3 className="subtext text-center">TOP 3 SKILLS ATTEMPTS</h3>

                                            <div className="d-flex justify-content-between">
                                                <Bar height={415} data={skillsData2} options={barOptions} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row">
                                <PodiumCardList winners={skillsRankings} />
                            </div> */}
                        </div>
                    </Scrollbars>
                </Carousel>







                {/* <div className="row">
                        <div className="col-4 text-center text-white mx-auto p-2">
                            <button onClick={handleClick} className="btn-block card mx-auto card-common border-danger btn-danger bg-danger p-2">
                                Clear all scouting data
                            </button>
                        </div>
                    </div> */}

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