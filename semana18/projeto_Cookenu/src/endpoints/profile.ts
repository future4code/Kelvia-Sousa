import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

const getProfileById = async (id: string): Promise<any> => {
  const result = await connection.select("*").from("cookenuUser").where({ id });

  return result[0];
};

export default async function getProfile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const user = await getProfileById(authenticationData.id);

    res.status(200).send({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}
