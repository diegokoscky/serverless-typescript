import { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../utils/mongodb";

export default async (request: VercelRequest, response: VercelResponse) => {
    const { email } = request.body;

    const db = await connectToDatabase();

    const collection = db.collection("subscribers");

    await collection.insertOne({
        email,
        subscribedAt: new Date(),
    });

    return response.status(201).json({ ok: true });
};
