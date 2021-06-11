import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function getRecipe(  req: Request, res: Response): Promise<void> {
   try {
      const token = req.headers.authorization as string;
      getTokenData(token);

     const {id} = req.params 
    
      const result =  await connection.raw(`
      SELECT id,title, description, DATE_FORMAT(creationDate, '%d/%m/%Y') as creationDate FROM cookenuRecipe where id = '${id}'
      `)
    
      res.status(200).send({result: result[0]});

    } catch (err) {
      res.status(400).send({ message: err.message });
    }
}  