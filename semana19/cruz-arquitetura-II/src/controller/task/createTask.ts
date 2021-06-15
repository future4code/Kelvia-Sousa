import { Request, Response } from "express";
import { createTaskBusiness } from "../../business/task/createTaskBusiness";
import { task } from "../../model/task";

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, status, authorId }: task = req.body

      await createTaskBusiness({
         title, description, deadline, status, authorId
      })

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}