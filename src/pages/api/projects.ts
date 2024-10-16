import { NextApiRequest, NextApiResponse } from "next";
import { retriveData } from "@/lib/firebase/service";
import { ProjectsType } from "@/types/projets.type";

type Data = {
    status: boolean;
    statusCode: number;
    data: ProjectsType[];
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    try {
        const data = await retriveData("projects");
        res.status(200).json({ status: true, statusCode: 200, data: data.projects });
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ status: false, statusCode: 500, data: [] });
    }
}
