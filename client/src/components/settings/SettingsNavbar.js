import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function SettingsNavbar(props) {
    console.log(props)

    return (<>
        <div class="px-0 col-md-3 col-xl-2 ">
            <div class="d-flex bg-dark flex-column align-items-center align-items-sm-start text-white min-vh-100">
                <ul class="navbar-dark  pt-3 ps-2 navbar-nav  nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start" id="menu">
                    {props.options.map(option =>
                        <li className={`ms-3 ms-sm-0 mb-1  nav-item`}>
                            <Link to={`/${"you'remom"}`} className={`nav-option nav-link`}>
                                <FontAwesomeIcon className={"ps-3 pe-3"} icon={option.icon} />
                                {option.name}
                            </Link>
                        </li>
                    )}

                    {/* <li className={`ms-3 ms-sm-0 mb-1  nav-item`}>
                                    <Link to={`/${"you'remom"}`} className={`nav-option nav-link`}>
                                        <FontAwesomeIcon className={"ps-3 pe-3"} icon={faPen} />
                                        SCOUTING QUESTIONS
                                    </Link>
                                </li>
                                <li className={`ms-3 ms-sm-0 nav-item`}>
                                    <Link to={`/${"you'remom"}`} className={`nav-option nav-link`}>
                                        <FontAwesomeIcon className={"ps-3 pe-3"} icon={faTrophy} />
                                        DATA MANAGEMENT
                                    </Link>
                                </li> */}
                    {/* <div className="card settings-card">
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
                                </div> */}
                </ul>
            </div>
        </div>
    </>
    )
} 