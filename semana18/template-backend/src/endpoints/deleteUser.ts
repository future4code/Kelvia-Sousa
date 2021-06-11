import { Request, Response } from "express";
import  connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function deleteUser (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token);

    if(authenticationData.role === 'ADMIN') {
      throw new Error("Unauthorized ")
    }

    const {id} = req.params
    

    await connection.raw(
      `DELETE FROM to_do_list_users WHERE id = "${id}"`
    )    

    res.status(200).send({message: "User has been deleted"});

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}