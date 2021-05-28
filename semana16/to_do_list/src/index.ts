import {connection} from "./connection";
import app from "./app";
import { Request, Response } from "express";


type user = {
  name: string,
  nickname: string,
  email: string
}

app.put('/user', async (req: Request, res: Response)=>{
  try {
    
    if(!req.body.name || !req.body.nickname || !req.body.email){
      throw new Error("All fields are required");
    }

    const newUser: user = {
      name: req.body.name, 
      nickname: req.body.nickname, 
      email: req.body.email
    }

    await connection('ToDoList').insert(newUser)

    res.status(200).send("Success")
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})
