import create from "zustand"

const useStore = create(set => ({
    teamData: {},
    do: "s"
}))

export default useStore;