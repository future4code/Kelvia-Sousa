import {connection} from "./connection";
import app from "./app";
import { Request, Response } from "express";


type user = {
  name: string,
  nickname: string,
  email: string
}
//1 - Criar usuário
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

//2 - Pegar usuário pelo id
const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM ToDoList WHERE id = '${id}'
  `)
	return result[0]
}
app.get('/user/:id', async (req: Request, res: Response) => {
  try {

    const id = req.params.id
    const result =  await getUserById(id)

    res.send(result);  
  } catch (error) {
    res.status(500).send("An unexpected error occurred");
  }
})

// 3 - Editar usuário

const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
  const result = await connection.raw(`
    UPDATE ToDoList SET name = '${name}', nickname = '${nickname}' WHERE id = '${id}'
  `)
	return result
} 

app.post('/user/edit/:id', async (req: Request, res: Response)=> {
  try {

    if(!req.body.name || !req.body.nickname){
      throw new Error("All fields are required");
    }

    const id = req.params.id
    const name = req.body.name
    const nickname = req.body.nickname

    const result =  await editUser(id, name, nickname )
    
    res.send(result[0]);  
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})