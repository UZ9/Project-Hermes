import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SettingsPanel(props) {
    let { id } = useParams();

    const currentPage = props.options.find((page) => page.id === id) || props.options[0];

    const [config, setConfig] = useState(props.config);

    const setConfigOption = (key, value) => setConfig({...config, [key]: value});

    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap" >
                    {React.cloneElement(props.children[0], { config: config, setConfigOption: setConfigOption, options: props.options, currentPage: currentPage })}
                    {React.cloneElement(props.children[1], { config: config, setConfigOption: setConfigOption, options: props.options, currentPage: currentPage })}
                </div>
            </div>
        </>

    );
}

export default SettingsPanel;