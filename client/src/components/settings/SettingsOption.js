import { useState } from "react";

function formatPattern(input, pattern) {
    if (!input) return input;

    let number = input.replace(/[^\d]/g, "");

    let indices = [];

    // TODO: Make the pattern dynamic depending on props config
    pattern = "XX-XXXX";


    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "-") indices.push(i);
    }

    if (number.length < 3) return number;
    
    return `${number.slice(0, 2)}-${number.slice(2, 6)}`
}

function SettingsOption(props) {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        const formatted = props.pattern ? formatPattern(e.target.value, props.pattern) : e.target.value;

        setInput(formatted);
        props.setConfigOption(props.setting, formatted);
    }

    return (
        <>
            <h5 className="subtext">{props.name.toUpperCase()}</h5>


            <div class="input-group mb-4">
                {props.prefix && <span className="input-group-text" id="basic-addon3">{props.prefix}</span>}
                <input autoComplete={"off"} value={props.setting in props.config ? props.config[props.setting] : input} onChange={handleInput} placeholder={props.placeholder}  type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
        </>

    );
}

export default SettingsOption;