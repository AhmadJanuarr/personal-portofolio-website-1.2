import { create } from "zustand"
import { ProjectsType } from "../types/projects.type"

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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
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
