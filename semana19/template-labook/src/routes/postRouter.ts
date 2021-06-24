import { Router } from "express";
import { feed } from "../controller/feed";
import { post } from "../controller/post";
import { viewPost } from "../controller/viewPost";

export const postRouter = Router();

postRouter.post("/create", post);
postRouter.get("/feed", feed);
postRouter.get("/:id", viewPost);
