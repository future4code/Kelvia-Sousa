import { Router } from "express";
import { register } from "../controller/register";

export const userRouter = Router();

userRouter.post('/register', register)

