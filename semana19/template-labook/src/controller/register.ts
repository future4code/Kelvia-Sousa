import { Request, Response } from "express";
import { registerBusiness } from "../business/registerBusiness";
import { RegisterUserDTO } from "../model/userTypes";

export const register = async ( req: Request, res: Response) => {
  try {
    const { name, email, password }: RegisterUserDTO = req.body

    const token: any = await registerBusiness({
      name, email, password
    })

    res.status(200).send({message: 'Cadastro concluído', token})
    
  } catch (error) {
    res.status(400).send(error.message)
  }
}