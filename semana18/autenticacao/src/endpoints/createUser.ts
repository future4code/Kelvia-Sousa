import { Request, Response } from "express";
import { connection } from "../connection";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Fill the fields 'email' e 'password'");
    }

    if(email.indexOf('@') === -1){
      throw new Error("Invalid email");
    }

    if(password.length < 6){
      throw new Error("Invalid password");
    }

    const [user] = await connection("User").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }
    const id: string = generateId();

    const newUser: user = { id, email, password };
    await connection("User").insert(newUser);

    const token: string = generateToken({
      id: newUser.id,
    });
    res.status(201).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}
