import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";
import { USER_ROLES } from "../model/User";
import tokenGenerator, { AuthenticationData } from "../services/tokenGenerator";

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(req: Request, res: Response){
      try {
         const {id} = req.params
         const userById = userBusiness.getUserById(id)

         res.status(200).send(userById)
      } catch (error) {
         res.status(400).send(error.message)
      }
   }

   public async getAllUsers(req: Request, res: Response){
      try {
         const token = req.headers.authorization as string;
         const tokenVerify: AuthenticationData = tokenGenerator.verify(token)

         if(tokenVerify.role !== USER_ROLES.ADMIN){
            res.statusCode = 403
            res.statusMessage = "Only administrators can change the profile"
            throw new Error()
         }
         const AllAdminUsers = userBusiness.getAllUsers(tokenVerify.role)

         res.status(200).send(AllAdminUsers)
      } catch (error) {
         res.status(400).send(error.message)
      }
   }
}

export default new UserController()