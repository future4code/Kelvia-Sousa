import { Request, Response, raw } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function editeRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    if (authenticationData.role !== USER_ROLES.NORMAL) {
      throw new Error(
        "Only profiles of the normal type can change the profile"
      );
    }

    const { title, description, recipeId } = req.body;

    // Como impedir que edite receita de outra pessoa?
    /* 
    if (!(recipeId in )) {
      throw new Error("This recipe belongs to another user");
    }  */

    await connection("cookenuRecipe")
      .update({ title, description })
      .where({ id: recipeId });

    res.send({ message: "Recipe has changed" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
