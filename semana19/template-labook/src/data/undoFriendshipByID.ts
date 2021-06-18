import { CustomError } from "../business/Errors/CustomErros";
import { connection } from "./connection";

export const undoFriendshipById = async (new_friend: string): Promise<void> => {
  try {
    const result = await connection("labook_friendship")
      .delete()
      .where({ new_friend });

    if (!result) {
      throw new CustomError(404, "amizade não encontrado");
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
