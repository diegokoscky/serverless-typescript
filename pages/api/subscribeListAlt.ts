import { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../utils/mongodb";

export default async (request: VercelRequest, response: VercelResponse) => {
    const db = await connectToDatabase();

    const data = await db.collection("subscribers").find().toArray();

    return response.status(200).json(data);
};
