import { Request, Response } from "express";
import { signupBusiness } from "../business/signup_business";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name,  email, password, role } = req.body

      const token: string = await signupBusiness({
         name, email, password, role
      })

      res.status(201).send({token})

   } catch (error) {
      res.status(400).send(error.message)
   }
}