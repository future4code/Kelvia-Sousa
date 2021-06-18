import { makingFriends } from "../data/makingFriends";
import { friendshipType } from "../model/friendshipTypes";
import { getTokenData } from "../services/authenticator";
import { CustomError } from "./Errors/CustomErros";

export const makeNewFriends = async (
  new_userId: string,
  token: string
): Promise<void> => {
  if (!new_userId || !token) {
    throw new CustomError(
      404,
      "Você precisa estar logado e fornecer os dados do outro usuário para fazer uma nova amizade."
    );
  }

  const tokenData = getTokenData(token);

  const makeFriend: friendshipType = {
    user: tokenData.id,
    new_friend: new_userId,
  };

  await makingFriends(makeFriend);
};
