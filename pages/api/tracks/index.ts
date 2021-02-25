// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import { APITrack } from "../../../utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    handleGet(req, res);
  }
  if (req.method === "POST") {
    handlePost(req, res);
  }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDb();
  res.status(200).json(db.tracks);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newTrack: APITrack = req.body;

  const db = await readDb();
  if (db.tracks.some((track) => track.id === newTrack.id)) {
    return res.status(409).json({
      status: 409,
    });
  }
  db.tracks = [...db.tracks, newTrack];
  await writeDb(db);
  res.status(201).json(newTrack);
}
