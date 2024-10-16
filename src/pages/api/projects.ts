import { NextApiRequest, NextApiResponse } from "next"
import { retriveData } from "@/lib/firebase/service"
import { ProjectsType } from "@/types/projects.type"

type Data = {
    status: boolean
    statusCode: number
    data: ProjectsType[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    try {
        const data = await retriveData("projects")
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: data.projects,
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching data: ", error.message);
        } else {
            console.error("Error fetching data: ", error);
        }
        res.status(500).json({ status: false, statusCode: 500, data: [] })
    }
}
