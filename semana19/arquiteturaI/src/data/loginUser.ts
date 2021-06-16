import { connection } from "./connection";

export const loginUser = async (email: string) => {
  try {
    const result = await connection("User_Arq").select("*").where({email});
    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
