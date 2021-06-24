import { Request, Response } from "express";
import { getPostByIdBusiness } from "../business/getPostByIdBusiness";
import { getTokenData } from "../services/authenticator";

export const viewPost = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    getTokenData(token);

    const { id } = req.params;
    const post = await getPostByIdBusiness(id, token);

    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
