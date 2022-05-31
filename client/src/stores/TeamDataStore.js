import create from "zustand"

import { mountStoreDevtool } from 'simple-zustand-devtools'

const useStore = create(set => ({
    teamData: [],
    currentTeam: "",
    do: "s"
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useStore);
}

export default useStore;