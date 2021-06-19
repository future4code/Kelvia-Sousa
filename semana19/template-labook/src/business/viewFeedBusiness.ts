import { viewFeed } from "../data/viewFeed";
import { getTokenData } from "../services/authenticator";
import { CustomError } from "./Errors/CustomErros";

export const viewFeedBusiness = async(token: string) => {
  if(!token){
    throw new CustomError(404, "Unauthorized");
  }
  

  await viewFeed()
}