import { create } from "zustand"
import { ProjectsType } from "../types/projets.type"

type ProjectState = {
    projects: ProjectsType[]
    fetchProjects: () => Promise<void>
    isLoading: boolean
}

export const useProjectStore = create<ProjectState>((set) => ({
    projects: [],
    isLoading: false,
    fetchProjects: async () => {
        set({ isLoading: true })
        try {
            const res = await fetch("http://localhost:3000/api/projects")
            const response = await res.json()
            set({ projects: response.data })
        } catch (error) {
            console.error("Error fetching data: ", error)
            set({ projects: [] })
        } finally {
            set({ isLoading: false })
        }
    },
}))
