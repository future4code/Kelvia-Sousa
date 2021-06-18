import { selectPostById } from "../data/selectPostById";
import { postDTO } from "../model/postTypes";
import { CustomError } from "./Errors/CustomErros";

export const getPostByIdBusiness = async (id: string, token: string) => {
  if (!token) {
    throw new CustomError(404, "Unauthorized");
  }
  const result = await selectPostById(id);

  if (!result) {
    throw new CustomError(404, "Publicação não encontrada ");
  }

  const postWithIdInfo: postDTO = {
    photo: result.photo,
    description: result.description,
    type: result.type,
    created_at: result.created_at,
    author_id: result.author_id,
  };

  return postWithIdInfo;
};
