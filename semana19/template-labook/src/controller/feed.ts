import { Request, Response } from "express";
import { viewFeedBusiness } from "../business/viewFeedBusiness";


export const feed = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const allPosts = await viewFeedBusiness(token)

    res.status(200).send({allPosts});
    
  } catch (error) {
    res.status(400).send(error.message);
  }
}