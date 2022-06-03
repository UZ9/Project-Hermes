import { Link } from "react-router-dom";

export default function NavbarItems(props) {

    const mappings = {
        "": "Home",
        "scouting": "Scouting",
        "matches": "Matches",
        "admin": "Visuals"
    }


    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {Object.keys(mappings).map(route => (
                    <li className={`nav-item ${props.active === route ? "active" : ""}`}>
                        <Link to={`/${route}`} className={`nav-option nav-link ${props.active === route ? "text-white" : ""}`}>
                            {mappings[route]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}