import { Request, Response } from "express";
import { CustomError } from "../business/Errors/CustomErros";
import { makeNewFriends } from "../business/makeNewFriends";
import { friendshipType } from "../model/friendshipTypes";
import { getTokenData } from "../services/authenticator";

export const friendshipController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const { id } = req.params;

    if (id === authenticationData.id) {
      throw new CustomError(
        404,
        "informe o Id de outro usuário, este pertence a você"
      );
    }

    const newFriend: friendshipType = {
      user: token,
      new_friend: id,
    };

    await makeNewFriends(newFriend.new_friend, token);

    res.status(200).send({ mensagem: "Amizade iniciada com sucesso" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
