import { deleteByID } from "../data/deleteUser";
import { getTokenData } from "../services/authenticator";

export const  deleteUsersBusiness  = async ( required: {id: string, token: string}) => {
  
  const verifiedToken = getTokenData(required.token);

	if(verifiedToken.role !== "ADMIN"){
		throw new Error("Only administrators can delete users")
	}

  return await deleteByID(required.id);

}