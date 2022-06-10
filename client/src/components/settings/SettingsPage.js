import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SettingsPage(props) {
    console.log(props.children);

    return (
        <>
            {props.children}
            {/* <li className={`ms-3 ms-sm-0 mb-1 nav-item active`}>
                <Link to={`/${"you'remom"}`} className={`nav-option nav-link text-white`}>
                    <FontAwesomeIcon className={"ps-3 pe-3"} icon={faTrophy} />
                    TOURNAMENT SETTINGS
                </Link>
            </li> */}
        </>

    );
}

export default SettingsPage;