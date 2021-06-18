import { Router } from "express";
import { friendshipController } from "../controller/friendship";

export const friendshipRouter = Router();

friendshipRouter.post("/:id", friendshipController);
