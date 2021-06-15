import { connection } from "../connection";
import { signupUserIdDTO } from "../../model/user";

export const insertUser = async(
   user: signupUserIdDTO
) => {
   await connection.insert(user).into('to_do_list_users')
}