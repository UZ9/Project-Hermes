import React from "react";
import toast from "react-hot-toast";
import { socket } from "../../service/Socket";

export function SettingsBody(props) {
    const handleCancel = () => {

    }

    const handleSubmit = () => {
        toast.success('Your changes saved successfully.', {
            className: "subtext",
            style: {
                marginTop: "3em",
                padding: '16px',
                fontFamily: '"Jura", sans-serif',
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            iconTheme: {
                primary: '#e77917',
                secondary: '#ededed',
            },
        });

        socket.emit("update-config", props.config);
    }


    return (
        <>
            <div className="col py-3 ms-5 me-5">
                <h1 className="subtext pb-3">{props.currentPage.name.toUpperCase()}</h1>

                {React.Children.map(props.children, (child, i) => {
                    if (child.props.pageId === props.currentPage.id && child) {
                        return React.cloneElement(child, { config: props.config, setConfigOption: props.setConfigOption });
                    }
                })}

                <div className="text-end">
                    <button onClick={handleCancel} className="button btn btn-secondary logo me-3 p-2 px-3">Cancel</button>

                    <button onClick={handleSubmit} className="button btn signout-btn p-2 px-3">Save</button>
                </div>


            </div>
        </>

    );
}