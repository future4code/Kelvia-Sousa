import { Request, Response } from "express";
import { makeNewFriends } from "../business/makeNewFriends";
import { friendshipType } from "../model/friendshipTypes";

export const friendshipController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;

    const { id } = req.params;

    const newFriend: friendshipType = {
      user: token,
      new_friend: id,
    };

    await makeNewFriends(newFriend.new_friend, token);

    res.status(200).send({ mensagem: "success" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
