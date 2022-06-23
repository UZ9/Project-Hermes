import { faCog, faPen, faTrophy } from "@fortawesome/free-solid-svg-icons";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import NavbarItems from "../components/navbar/NavbarItems";
import { SettingsBody } from "../components/settings/SettingsBody";
import SettingsNavbar from "../components/settings/SettingsNavbar";
import SettingsOption from "../components/settings/SettingsOption";
import SettingsPage from "../components/settings/SettingsPage";
import SettingsPanel from "../components/settings/SettingsPanel";
import useStore from "../stores/TeamDataStore";
import { Toaster } from 'react-hot-toast';



export default function SettingsView() {
    const configStore = useStore(state => state.config);

    const options = [
        {
            "name": "Tournament Settings",
            "id": "tournamentsettings",
            "icon": faTrophy
        },
        {
            "name": "Scouting Questions",
            "id": "scoutingquestions",
            "icon": faPen
        },
        {
            "name": "Data Settings",
            "id": "datasettings",
            "icon": faCog
        }
    ]


    return (
        configStore === undefined ? (
            <>
                <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="" />
                </nav>

                <LoadingAnimation />
            </>
        ) :
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItems active="settings" />
                </nav>

                <Toaster/>


                <SettingsPanel config={configStore} options={options}>
                    <SettingsNavbar />
                    <SettingsBody>
                        <SettingsPage pageId={"tournamentsettings"}>
                            <SettingsOption setting={"tournament.sku-id"} pattern={"XX-XXXX"} placeholder={"XX-XXXX"} prefix={"RE-VRC-"} name={"Tournament SKU ID"} />
                            <SettingsOption setting={"tournament.division"} placeholder={"Division #"} name={"Tournament Division"} />
                        </SettingsPage>
                        <SettingsPage pageId={"scoutingquestions"}>
                            <SettingsOption setting={"scoutingquestions.questions"} name={"3rd config"} />
                        </SettingsPage>
                        <SettingsPage pageId={"datasettings"}>
                            <SettingsOption setting={"datasettings.robotevents-api-key"} placeholder={"API Key"} name={"robotevents api key"} />
                        </SettingsPage>
                    </SettingsBody>

                </SettingsPanel>
            </>
    )
}