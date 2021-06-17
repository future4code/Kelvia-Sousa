import { Request, Response } from "express";
import { postIdDTO } from "../model/postTypes";
import { connection } from "./connection";

export const selectPostById = async (
  req: Request, res: Response
): Promise<postIdDTO> => {
 try {
  const result = await connection.raw(`
  SELECT post.photo, post.description, DATE_FORMAT(post.created_at, '%d/%m/%Y') as creationDate, user.name FROM labook_posts post INNER JOIN labook_users user ON post.author_id = user.id`) 

  return result
 } catch (error) {
  throw new Error(error.slqMessage || error.message)
 }
}