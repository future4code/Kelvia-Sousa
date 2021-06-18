import { connection } from "./connection";
import { friendshipType } from "../model/friendshipTypes";

export const makingFriends = async (
  friendship: friendshipType
): Promise<void> => {
  await connection.insert(friendship).into("labook_friendship");
};
