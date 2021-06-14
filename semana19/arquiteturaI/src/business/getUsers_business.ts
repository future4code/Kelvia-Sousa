import {getUsersData} from "../data/getUsersData"
import { getTokenData } from "../services/authenticator";

export const getUsersBusiness = async ( token: string) => {
  
  if (!token){
    throw new Error('Unauthorized');
  }

  getTokenData(token)

  const users = await getUsersData()

  return(users)

}