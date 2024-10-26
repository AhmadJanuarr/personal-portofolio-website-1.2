import type { NextApiRequest, NextApiResponse } from "next"
import { retriveData } from "@/lib/firebase/service"
import { AbilityType } from "@/types/ability.type"

type Data = {
    status: boolean
    statusCode: number
    data: AbilityType[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

    try {
        const data = await retriveData("dev")
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: data.ability,
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching data: ", error.message)
        } else {
            console.error("Error fetching data: ", error)
        }
        res.status(500).json({ status: false, statusCode: 500, data: [] })
    }
}
