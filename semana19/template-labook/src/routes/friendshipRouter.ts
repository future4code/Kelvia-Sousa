import { Router } from "express";
import { friendshipController } from "../controller/friendship";
import { undoFriendship } from "../controller/undoFriendship";

export const friendshipRouter = Router();

friendshipRouter.post("/:id", friendshipController);
friendshipRouter.post("/undo/:id", undoFriendship);
