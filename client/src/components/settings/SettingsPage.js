import React from "react";

function SettingsPage(props) {

    return (
        <div className="ms-4">
            {React.Children.map(props.children, function (child) {
                return React.cloneElement(child, {config: props.config, setConfigOption: props.setConfigOption});
            })}
            {/* <li className={`ms-3 ms-sm-0 mb-1 nav-item active`}>
                <Link to={`/${"you'remom"}`} className={`nav-option nav-link text-white`}>
                    <FontAwesomeIcon className={"ps-3 pe-3"} icon={faTrophy} />
                    TOURNAMENT SETTINGS
                </Link>
            </li> */}
        </div>

    );
}

export default SettingsPage;