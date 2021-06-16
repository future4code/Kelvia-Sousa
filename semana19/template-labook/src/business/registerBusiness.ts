import { insertNewUser } from "../data/insertNewUser";
import { RegisterUserDTO, RegisterUserIdDTO } from "../model/userTypes";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const registerBusiness = async ( registerInput: RegisterUserDTO): Promise<void> => {
  if (!registerInput.name || !registerInput.email || !registerInput.password) {
    throw new Error("Preenchar todos os campos.")
  }
  const cypherPassword = await hash(registerInput.password);

  const newUser: RegisterUserIdDTO = { 
    ...registerInput,
    password: cypherPassword, 
    id: generateId()
  }

  await insertNewUser(newUser)

  const token: string = generateToken({ id: newUser.id})

}
