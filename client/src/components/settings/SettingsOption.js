function SettingsOption(props) {
    return (
        <>
            <h5 className="subtext">{props.name.toUpperCase()}</h5>

            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </>

    );
}

export default SettingsOption;