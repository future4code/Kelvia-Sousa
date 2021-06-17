import { Request, Response } from "express";
import { postingBusiness } from "../business/postingBusiness";
import { postDTO } from "../model/postTypes";
import { getTokenData } from "../services/authenticator";

export const post = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const { photo, description, type }: postDTO = req.body

    const authorId  = authenticationData.id

    const post: postDTO = {
      photo,
      description,
      type,
      created_at: new Date(),
      author_id : authorId
    }

    await postingBusiness(post, token)    
    
    res.status(200).send({message: "Publicação concluída"})
 
  } catch (error) {
    res.status(400).send(error.message)
  }
}