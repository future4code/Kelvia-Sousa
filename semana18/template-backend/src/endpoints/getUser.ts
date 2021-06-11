import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

const getUserById = async (id: string): Promise<any> => {
  const result = await connection
    .select("id", "name", "role")
    .from("to_do_list_users")
    .where({ id })

  return result[0];
}

export default async function getUser (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token);

    const user = await getUserById(authenticationData.id)    

    res.status(200).send(user);

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}