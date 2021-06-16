import { connection } from "./connection";
import { RegisterUserIdDTO } from "../model/userTypes";

export const insertNewUser = async (user: RegisterUserIdDTO) => {
  await connection.insert(user).into("labook_users");
};
