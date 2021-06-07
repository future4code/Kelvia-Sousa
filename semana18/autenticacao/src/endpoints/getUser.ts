import { Request, Response } from "express";
import { connection } from "../connection";

export default async function getUserByEmail (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userEmail = req.query.email as string

    const result = await connection.raw(
      `SELECT * FROM User WHERE email LIKE "%${userEmail}%"`
    )    

    res.status(201).send(result[0]);

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}
