import { Router } from "express";
import { login } from "../controller/login";
import { register } from "../controller/register";

export const userRouter = Router();

userRouter.post('/register', register)
userRouter.post('/login', login)

