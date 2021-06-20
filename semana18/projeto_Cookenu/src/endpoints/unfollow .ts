import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { Follow } from "../types";

export default async function unfollow(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const { userToUnfollowId } = req.body;

    const following = authenticationData.id;

    if (!userToUnfollowId) {
      throw new Error("type the userToUnfollowId.");
    }

    const [user] = await connection("cookenuFollowers").where({
      followed: userToUnfollowId,
    });

    if (!user) {
      res.statusCode = 409;
      throw new Error("Invalid Id");
    }

    const unfollow: Follow = {
      following,
      followed: userToUnfollowId,
    };

    await connection("cookenuFollowers").delete(unfollow);

    res.status(201).send({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}