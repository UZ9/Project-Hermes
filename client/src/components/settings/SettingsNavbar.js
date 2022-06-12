import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function SettingsNavbar(props) {
    return (<>
        <div class="px-0 col-md-3 col-xl-2 card-common ">
            <div class="d-flex bg-dark flex-column align-items-center align-items-sm-start text-white settings-sidebar">
                <ul class="navbar-dark  pt-3 ps-2 navbar-nav  nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start" id="menu">
                    {props.options.map(option =>
                        <li className={`ms-3 ms-sm-0 mb-1  nav-item`}>
                            <Link to={`/settings/${option.id}`} className={`nav-option nav-link ${option.id === props.currentPage.id ? "text-white" : ""}`}>
                                <FontAwesomeIcon className={"ps-3 pe-3"} icon={option.icon} />
                                {option.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </>
    )
} 