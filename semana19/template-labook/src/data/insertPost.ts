import { postIdDTO } from "../model/postTypes";
import { connection } from "./connection";

export const insertPost = async (post: postIdDTO) => {
  await connection.insert(post).into("labook_posts");
};
