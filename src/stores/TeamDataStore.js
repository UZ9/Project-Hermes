import create from "zustand"

const useStore = create(set => ({
    teamData: [],
    currentTeam: "",
    do: "s"
}))

export default useStore;