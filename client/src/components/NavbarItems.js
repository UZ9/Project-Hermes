import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import NavbarLogo from "./NavbarLogo";

export default function NavbarItems(props) {

    const mappings = {
        "": "Home",
        "scouting": "Scouting",
        "matches": "Matches",
        "admin": "Visuals",
        "settings": "Settings"
    }


    return (
        <>
            <button className="ms-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavbarLogo/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav pt-3 pt-sm-0">
                    {Object.keys(mappings).map(route => (
                        <li key={route} className={`ms-3 ms-sm-0 nav-item ${props.active === route ? "active" : ""}`}>
                            <Link to={`/${route}`} className={`nav-option nav-link ${props.active === route ? "text-white" : ""}`}>
                                {mappings[route]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}