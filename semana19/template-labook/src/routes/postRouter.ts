import { Router } from "express";
import { post } from "../controller/post";

export const postRouter = Router();

postRouter.post('/create', post)