import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../utils/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { method } = req;

        switch (method) {
            case "GET":
                const db = await connectToDatabase();
                const data = await db
                    .collection("subscribers")
                    .find()
                    .toArray();

                res.status(200).json(data);
                break;

            default:
                res.setHeader("Allow", ["GET", "PUT"]);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
