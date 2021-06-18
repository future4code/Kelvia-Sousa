import { insertNewUser } from "../data/insertNewUser";
import { RegisterUserDTO, RegisterUserIdDTO } from "../model/userTypes";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { CustomError } from "./Errors/CustomErros";

export const registerBusiness = async (
  registerInput: RegisterUserDTO
): Promise<void> => {
  if (!registerInput.name || !registerInput.email || !registerInput.password) {
    throw new CustomError(402, "Preencha todos os campos.");
  }

  if (registerInput.password.length < 6) {
    throw new CustomError(404, "Senha deve ter no mínimo 6 caracteres");
  }

  const cypherPassword = await hash(registerInput.password);

  const newUser: RegisterUserIdDTO = {
    ...registerInput,
    password: cypherPassword,
    id: generateId(),
  };

  await insertNewUser(newUser);

  const token: string = generateToken({ id: newUser.id });
};
