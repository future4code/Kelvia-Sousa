import { RegisterUserIdDTO } from "../model/userTypes";
import { connection } from "./connection";

export const selectUserByEmail = async (
  email: string
): Promise<RegisterUserIdDTO> => {
  try {
    const result = await connection("labook_users")
      .select("*")
      .where({ email });

    return {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      password: result[0].password,
    };
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
