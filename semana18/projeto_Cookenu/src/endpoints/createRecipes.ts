import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { Recipe } from "../types";


export default async function createRecipes(req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token); 
      
    const {title, description} = req.body

    const user_id = authenticationData.id

    if(!title || !description || !user_id){
      throw new Error("check that you have filled in all the fields.");
    }

    const id: string = generateId();

    const recipe: Recipe = {
      id,
      title,
      description,
      creationDate: new Date(),
      user_id
    }

    await connection("cookenuRecipe").insert(recipe)

    res.status(201).send({ title: recipe.title, description: recipe.description });
  } catch (error) {
    res.status(400).send({ message: error.message })
  }

}