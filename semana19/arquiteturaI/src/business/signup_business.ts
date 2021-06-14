import { hash } from "../services/hashManager";
import { insertUser } from "../data/insertUser";
import { userData } from "../model/user";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (userData: userData): Promise<string> => {
  if ( !userData.name || !userData.email || !userData.password || !userData.role) {
    throw new Error('Fill in the fields "name", "email" e "password"');
  }
  if (userData.email.indexOf("@") === -1) {
    throw new Error("Invalid Email");
  }
  if (userData.password.length < 6) {
    throw new Error("Password must have at least 6 characters");
  }
  const id: string = generateId();
  const cypherPassword = await hash(userData.password);
  await insertUser({ ...userData, password: cypherPassword, id });
  const token: string = generateToken({ id, role: userData.role });

  return token;
};
