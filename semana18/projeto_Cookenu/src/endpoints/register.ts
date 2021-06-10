import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import {User} from "../types"

export default async function registerUser(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const { name, email, password} = req.body

    if(!name ||  !email || !password) {
      res.statusCode = 422
      throw new Error("Error, please check that you have filled in all the fields.");

    }

   if (password.length < 6) {
     throw new Error("Password must contain at least 6 characters.");
   }

   const [User] = await connection('cookenuUser')
   .where({ email })

   if (User) {
    res.statusCode = 409
    throw new Error('The email informed is already registered')
   }

    const id: string = generateId();

    const newUser: User = {
      id,
      name,
      email,
      password: createHash(password),
   }
   await connection("cookenuUser").insert(newUser);

  const token: string = generateToken({
    id,
 });
   
   res.status(201).send({ "access_token": token });
    
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}