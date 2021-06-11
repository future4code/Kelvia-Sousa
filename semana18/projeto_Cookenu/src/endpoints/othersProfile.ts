import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function getOthersProfile(  req: Request, res: Response): Promise<void> {
   try {
      const token = req.headers.authorization as string;
      getTokenData(token);

     const {id} = req.params 
    
      const result =  await connection("cookenuUser")
      .select("id", "name", "email")
     .where("id", id) 
    
      res.status(200).send(result);

    } catch (err) {
      res.status(400).send({ message: err.message });
    }
}  