import { Request, Response } from "express";
import { connection } from "../connection";
import { generateToken } from "../services/authenticator";


export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please fill all fields");
    }
    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    const [user] = await connection("User").where({ email });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    const token: string = generateToken({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}
