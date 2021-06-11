import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function getRecipeFeed(  req: Request, res: Response): Promise<void> {
   try { 
      const token = req.headers.authorization as string;
      getTokenData(token); 
    
      const result =  await connection.raw(`
      SELECT r.id, r.title, r.description, DATE_FORMAT( r.creationDate, '%d/%m/%Y') as creationDate, r.user_id, u.name FROM cookenuRecipe r
      INNER JOIN cookenuUser u ON r.user_id = u.id;`)
     
    
      res.status(200).send({"Recipes": result[0] });

    } catch (err) {
      res.status(400).send({ message: err.message });
    }
}  