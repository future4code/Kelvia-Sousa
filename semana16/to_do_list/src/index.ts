import {connection} from "./connection";
import app from "./app";
import { Request, Response } from "express";


type user = {
  name: string,
  nickname: string,
  email: string
}

type task = {
  title: string,
  description: string,
  limitDate: string,
  status: string
  creatorUserId: string
}


//8 Pesquisar usuário 
const searchUser = async(name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT  id, nickname FROM ToDoList 
  `)
	return result[0]
}
app.get('/userSearch', async (req: Request, res: Response)=>{
  try {
    const name = req.query.name as string
    const result = await searchUser(name)
    // como fazer o filtro?

    if(name === "" ){
      throw new Error("Enter the name");
    }
    
    res.status(200).send({User: result})
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

// 6 - Pegar todos os usuários

const getAllUsers = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM ToDoList 
  `)
	return result[0]
}

app.get("/user/all", async (req: Request, res: Response) =>{
  try {

    const result = await getAllUsers()

    if(!result){
      throw new Error("Empty Table");
    }

    res.status(200).send({Users: result})
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
} )

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

// 4 - Criar tarefa

function formatarData(date: string): string {
  const split = date.split('/')
  const dateFormat = split[2] + "-" + split[1] + "-" + split[0]
  return dateFormat
}

app.put('/task', async (req:Request, res: Response) => {
  try {

    if(!req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId){
      throw new Error("All fields are required");
    }
    
    const newTask: task = {
      title: req.body.title, 
      description: req.body.description, 
      limitDate: formatarData(req.body.limitDate),
      status: req.body.status,
      creatorUserId: req.body.creatorUserId
    }

    await connection('Task').insert(newTask)

    res.status(200).send("Success")
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

//7 - Pegar tarefas criadas por um usuário 
const getTaskByUser = async (id: string ): Promise<any> => {
  const result = await connection.raw(`
  SELECT t.id, t.title, t.description, DATE_FORMAT(t.limitDate,'%d/%m/%Y') AS LimitDate, t.status, t.creatorUserId, u.name FROM Task t JOIN ToDoList u ON t.creatorUserId = u.id  WHERE t.creatorUserId ='${id}'
  `)
	return result[0]
}

app.get('/task', async (req: Request, res: Response)=>{
 try {

  const creatorUserId = req.query.creatorUserId as string
  const result = await getTaskByUser(creatorUserId)

  if(creatorUserId === ""){
    throw new Error("Enter the id");
  }

  res.status(200).send({Tasks: result})

 } catch (error) {
   res.status(400).send({ message: error.message });
 }
 } )

// 5 Pegar tarefa pelo id juntar user e task 
const getTaskById = async (id:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT t.id, t.title, t.description, DATE_FORMAT(t.limitDate,'%d/%m/%Y') AS LimitDate, t.status, t.creatorUserId, u.name FROM Task t JOIN ToDoList u ON t.creatorUserId = u.id  WHERE t.id ='${id}'
  `)
	return result[0]
}
app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    let result =  await getTaskById(id)

    res.status(200).send({Task: result});  
  } catch (error) {
    res.status(500).send("An unexpected error occurred");
  }
})

