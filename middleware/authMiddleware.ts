import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

export default async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end("Unauthorized");
    return;
  }
  next();
}
