import { Request, Response } from "express";
import { undoFriendshipBusiness } from "../business/undoFriendshipBusiness";

export const undoFriendship = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization as string;

    await undoFriendshipBusiness(id, token);

    res.status(200).send({ mensagem: "Amizade desfeita" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
