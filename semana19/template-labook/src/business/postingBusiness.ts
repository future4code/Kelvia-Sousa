import { insertPost } from "../data/insertPost";
import { postDTO, postIdDTO } from "../model/postTypes";
import { generateId } from "../services/idGenerator";
import { CustomError } from "./Errors/CustomErros";

export const postingBusiness = async (
  postData: postDTO,
  token: string
): Promise<void> => {
  console.log(postData);
  if (!token) {
    throw new CustomError(404, "Unauthorized");
  }

  if (!postData.photo || !postData.description || !postData.type) {
    throw new CustomError(402, "Preencha todos os campos.");
  }

  if (postData.type !== "normal" && postData.type !== "event") {
    throw new CustomError(402, "o tipo deve ser normal ou evento");
  }

  const newPost: postIdDTO = {
    ...postData,
    id: generateId(),
  };
  await insertPost(newPost);
};
