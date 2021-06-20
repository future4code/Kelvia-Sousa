import { Request, Response, raw } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function deleteRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params;
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    if (authenticationData.role !== USER_ROLES.NORMAL) {
      throw new Error(
        "Only profiles of the normal type can change the profile"
      );
    }

    const result = await connection.raw(
      `DELETE FROM cookenuRecipe WHERE id = '${id}' `
    );

    res.send({ message: "Success" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
