import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_TYPE,
  age: number
}

enum USER_TYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_TYPE.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_TYPE.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_TYPE.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_TYPE.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_TYPE.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_TYPE.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())


//endpoint que busque todos os usuários de uma lista
app.get('/users/all', (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

//endpoint, que busque todos os usuários que tenham uma propriedade type específica
//query
app.get('/search', (req: Request, res: Response) => {
  try {
    const type = req.query.type as string

    if(type.length < 2 ){
      throw new Error("Failed. Type at least two letters.");
    }
    const result = users.filter(user => user.type.toLowerCase().includes(type.toLowerCase()) ) 

    //usar  params do ENUM
    
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})
//params
app.get('/user/:type', (req: Request, res: Response) => {
  try {
    const type = req.params.type as string

    if(!(type in USER_TYPE))  {
      throw new Error("This type isn't valid");
    }
    const result = users.filter(user => user.type.includes(type) )  
    
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})


//endpoint de busca que encontre um usuário buscando por nome
app.get('/users/:name' , (req: Request, res: Response) => {
  try {
    const name = req.params.name as string;

    //fazer mensagem de erro

    const result = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
    res.status(200).send(result)

    } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

app.post('/add', (req: Request, res: Response) =>{
  try {

    const {id, name, email, type, age} = req.body

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
     }
  
     users.push(newUser) 

     res.status(400).send(newUser)
    
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})
//PUT
app.put('/add', (req: Request, res: Response) =>{
  try {

    const {id, name, email, type, age} = req.body

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
     }
  
     users.push(newUser) 

     res.status(400).send(newUser)
    
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})