import { Request, Response } from "express";
import {loginBusiness} from "../business/login_business";

export const login = async (req: Request, res: Response) : Promise<void> =>{
  try {
    const { email, password } = req.body;
    const token: string = await loginBusiness(email, password);
    res.status(201).send({ token });

  } catch (error) {
    res.status(400).send(error.message);
  }
};