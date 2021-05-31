import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
   }
})



const app: Express = express()
app.use(express.json())
app.use(cors())

type teacher = {
   id: string,
   name: string,
   email: string,
   type: string
}
//1.a
app.get("/teacher/search",  async (req: Request,res: Response): Promise<void> =>{
   try { 
      const name = req.query.name as string 

     if(!name){
         res.statusCode = 404
         throw new Error("No teacher found")
      }
      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula49_exercicio WHERE name LIKE "%${name}%";
   `)
      const teachers: teacher[] = result
      res.status(200).send({teachers: teachers[0]})
   } catch (error) {
      res.send(error.message || error.sqlMessage)
   }
})

//2
app.get("/teacher/:name",  async (req: Request,res: Response): Promise<void> =>{
   try { 
      const name = req.params.name as string 
      const orderBy = req.query.orderBy as string || "type" 
      const orderType = req.query.orderType as string || "DESC"

      // caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email. FAZER
     if(!name){
      res.statusCode = 404
      throw new Error("No teacher found")
      }

      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula49_exercicio WHERE name LIKE "%${name}%" ORDER BY ${orderBy} ${orderType.toUpperCase()};
   `)
      const teachers: teacher[] = result
      res.status(200).send({teachers: teachers[0]})
   } catch (error) {
      res.send(error.message || error.sqlMessage)
   }
})


//1.b
app.get("/teacher/:type",  async (req: Request,res: Response): Promise<void> =>{
   try { 
      const type = req.params.type as string 
     if(!type){
         res.statusCode = 404
         throw new Error("No teacher found")
      }
      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula49_exercicio WHERE type LIKE "%${type}%";
   `)
      const teachers: teacher[] = result
      res.status(200).send({teachers: teachers[0]})
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})
//3
app.get("/limit",  async (req: Request,res: Response): Promise<void> =>{
   try { 
      const name = req.query.name as string 
      const page = Number(req.query.page)  || 1

      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula49_exercicio WHERE name LIKE "%${name}%" LIMIT 5 OFFSET ${5* (page - 1)};
   `)
      const teachers: teacher[] = result
      res.status(200).send({FiveTeachers: teachers[0], page})
   } catch (error) {
      res.send(error.message || error.sqlMessage)
   }
})





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
