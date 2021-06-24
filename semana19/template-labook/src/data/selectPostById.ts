import { postIdDTO } from "../model/postTypes";
import { connection } from "./connection";

export const selectPostById = async (id: string): Promise<postIdDTO> => {
  try {
    const result = await connection("labook_posts").select("*").where({ id });

    return {
      id: result[0].id,
      photo: result[0].photo,
      description: result[0].description,
      type: result[0].type,
      created_at: result[0].created_at,
      author_id: result[0].author_id,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
