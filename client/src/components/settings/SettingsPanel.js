import React from "react";

function SettingsPanel(props) {
    return (
        <>
            <div class="container-fluid">
                <div class="row flex-nowrap" >
                    {React.cloneElement(props.children[0], { options: props.options })}
                    {React.cloneElement(props.children[1], { options: props.options })}
                </div>
            </div>
        </>

    );
}

export default SettingsPanel;