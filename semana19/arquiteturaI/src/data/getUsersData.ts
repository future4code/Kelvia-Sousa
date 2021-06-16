import { connection } from "./connection";

export const getUsersData = async (): Promise<any> => {
  const users: any = [];
  
  const result = await connection("User_Arq").select("*")
  for(let user of result){
    users.push(user);
}

return users;
}