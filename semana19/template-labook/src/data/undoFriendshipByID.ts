import { NotFoundError } from "../business/Errors/NotFoundError";
import { connection } from "./connection";

export const undoFriendshipById = async (new_friend: string): Promise<void> => {
  try {
    const result = await connection("labook_friendship")
      .delete()
      .where({ new_friend });

    if (!result) {
      throw new NotFoundError();
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
