import { NextApiRequest, NextApiResponse } from "next"
import { SoftwareType } from "@/types/software.type"
import { retriveData } from "@/lib/firebase/service"

type Data = {
    status: boolean
    statusCode: number
    data: SoftwareType[]
}
export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    try {
        const data = await retriveData("software")
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: data.softwareApp,
        })
    } catch (error) {
        console.error("Error fetching data: ", error)
        res.status(500).json({ status: false, statusCode: 500, data: [] })
    }
}
