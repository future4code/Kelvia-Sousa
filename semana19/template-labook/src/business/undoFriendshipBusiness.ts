import { undoFriendshipById } from "../data/undoFriendshipByID";
import { CustomError } from "./Errors/CustomErros";

export const undoFriendshipBusiness = async (id: string, token: string) => {
  if (!token) {
    throw new CustomError(404, "Unauthorized");
  }

  await undoFriendshipById(id);
};
