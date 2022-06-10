import { faPen, faTrophy } from "@fortawesome/free-solid-svg-icons";
import NavbarItems from "../components/NavbarItems";
import { SettingsBody } from "../components/settings/SettingsBody";
import SettingsNavbar from "../components/settings/SettingsNavbar";
import SettingsOption from "../components/settings/SettingsOption";
import SettingsPage from "../components/settings/SettingsPage";
import SettingsPanel from "../components/settings/SettingsPanel";

export default function SettingsView(props) {
    
    const options = [
        {
            "name": "Tournament Settings",
            "link": "tournamentsettings",
            "icon": faTrophy
        },
        {
            "name": "Scouting Questions",
            "link": "scoutingquestions",
            "icon": faPen
        }
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavbarItems active="settings" />
            </nav>


            <SettingsPanel options={options}>
                <SettingsNavbar />
                <SettingsBody>
                    <SettingsPage pageId={"tournamentsettings"}>
                        <SettingsOption setting={"tournament.sku-id"} name={"Tournament SKU ID"} />
                        <SettingsOption setting={"tournament.sku-id"} name={"Tournament SKU ID"} />
                        <SettingsOption setting={"tournament.sku-id"} name={"Tournament SKU ID"} />
                        <SettingsOption setting={"tournament.sku-id"} name={"Tournament SKU ID"} />
                        <SettingsOption setting={"tournament.sku-id"} name={"Tournament SKU ID"} />
                    </SettingsPage>
                </SettingsBody>
                
            </SettingsPanel>
        </>
    )
}