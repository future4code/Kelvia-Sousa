import { Request, Response } from "express";
import { getUsersBusiness } from "../business/getUsers_business";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const users = await getUsersBusiness(token)

    res.status(201).send(users );
  } catch (error) {
    res.status(400).send(error.message);
  }
};
