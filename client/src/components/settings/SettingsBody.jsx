import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export function SettingsBody(props) {
    const current = 0;

    console.log({props})

    return (
        <>
            <div class="col py-3 ms-4">
                <h1 className="subtext pb-3">{props.options[current].name.toUpperCase()}</h1>

                {React.Children.map(props.children, (child, i) => i === current && child)}
                
            </div>
        </>

    );
}