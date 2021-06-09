import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userAddress, userRole } from "../types";
import { hash } from "../services/hashManager";
import { getAddressInfo } from "../services/getAddress";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role, PostalCode, number} = req.body

      if (!name || !nickname || !email || !password || !role || !PostalCode || !number) {
         res.statusCode = 422
         throw new Error("Fill in all the fields")
      }

      if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const getAddressByCep = await getAddressInfo(PostalCode)

      const id: string = generateId();
      
      const cypherText = await hash(password);
      const newUser: user = { id, name, nickname, email, password: cypherText, role}
      
      const newAddress : userAddress = {
         id,
         street: getAddressByCep?.street,
         number,
         neighborhood: getAddressByCep?.neighborhood,
         PostalCode,
         city: getAddressByCep?.city,
         state: getAddressByCep?.state,
         user_id: newUser.id
      }
      
      await connection('to_do_list_users').insert(newUser)
      await connection("Adress").insert(newAddress)

      const token: string = generateToken({ id, role })
      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}