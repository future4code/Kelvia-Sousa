import { Request, Response } from "express";
import { deleteUsersBusiness } from "../business/deleteUsers_business";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const required = {id:req.params , token:req.headers.authorization as string}
    
    await deleteUsersBusiness(required)

    res.status(200).send({ message: "User successfully deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
  
};