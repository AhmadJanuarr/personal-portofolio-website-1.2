// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retriveData } from "@/lib/firebase/service";

type Data = {
    status: boolean;
    statusCode: number;
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const dataSkilss = await retriveData("dev");
    res.status(200).json({ status: true, statusCode: 200, data: dataSkilss });
}
