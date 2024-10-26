import { NextApiRequest, NextApiResponse } from "next"
import { retriveData, retriveDataByName } from "@/lib/firebase/service"
import { ProjectsType } from "@/types/projects.type"

type Data = {
    status: boolean
    statusCode: number
    data: ProjectsType[] | ProjectsType | null
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

    try {
        const projectTitle = req.query.projects ? req.query.projects[1] : null
        if (projectTitle) {
            const data = await retriveDataByName("projects", projectTitle)
            if (data) {
                res.status(200).json({
                    status: true,
                    statusCode: 200,
                    data: data as ProjectsType[],
                })
            } else {
                res.status(404).json({
                    status: false,
                    statusCode: 404,
                    data: [],
                })
            }
        } else {
            const data = await retriveData("projects")
            return res.status(200).json({
                status: true,
                statusCode: 200,
                data: data.projects,
            })
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
        res.status(500).json({ status: false, statusCode: 500, data: null })
    }
}
