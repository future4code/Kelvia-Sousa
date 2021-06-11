import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { Follow } from "../types";


export default async function followers(req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authenticationData  = getTokenData(token); 
      
    const {userToFollowId} = req.body

    const following = authenticationData.id

    if(!userToFollowId ){
      throw new Error("type the userToFollowId.");
    }
    const follow: Follow= {
      following,
      followed: userToFollowId
    }

    await connection("cookenuFollowers").insert(follow)

    res.status(201).send({ message: "Followed successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message })
  }

}


function reverseString(string: string) {
	return string.split("").reverse().join("");
}
console.log(reverseString("escola"))