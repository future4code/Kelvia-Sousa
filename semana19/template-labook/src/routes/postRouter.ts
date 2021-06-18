import { Router } from "express";
import { post } from "../controller/post";
import { viewPost } from "../controller/viewPost";

export const postRouter = Router();

postRouter.post("/create", post);
postRouter.get("/:id", viewPost);
