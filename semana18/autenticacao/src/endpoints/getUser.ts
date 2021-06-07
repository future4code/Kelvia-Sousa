import { Request, Response } from "express";
import { connection } from "../connection";

export default async function getUserByEmail (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {email} = req.params

    const result = await connection.raw(
      `SELECT * FROM User WHERE email = "${email}"`
    )    

    res.status(200).send(result[0]);

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}
