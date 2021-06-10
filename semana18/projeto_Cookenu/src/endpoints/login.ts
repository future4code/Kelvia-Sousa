import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../types";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export default async function login(
    req: Request,
    res: Response
) {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("please fill in all the fields.")
        }

        const queryResult = await connection.raw(
        `  SELECT * from cookenuUser
            where email = "${email}";
        `)

        const user = queryResult[0][0];

        if(!user){
            throw new Error("User not found")
        }

        if(!compareHash(password, user.password)){
            throw new Error("Invalid Credentials")
        }

        const token: string = generateToken(
            {
               id: user.id
         });  
   
         res.status(200).send({ "access_token": token });

    } catch (error) {
        res.status(400).send({error: error.message});
    }
}