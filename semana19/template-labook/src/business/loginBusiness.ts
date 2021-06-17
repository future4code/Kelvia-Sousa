import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { CustomError } from "./Errors/CustomErros";
import { NotFoundError } from "./Errors/NotFoundError";

export const loginBusiness = async (
  email: string,
  password: string
): Promise<string> => {
  if (!email || !password) {
    throw new CustomError(404, "Preencha todos os campos");
  }
  const userExists = await selectUserByEmail(email);
  if (!userExists) {
    throw new NotFoundError();
  }

  const passwordIsCorrect: boolean = await compare(
    password,
    userExists.password
  );
  if (!passwordIsCorrect) {
    throw new CustomError(404, "Senha incorreta");
  }
  const token: string = generateToken({
    id: userExists.id,
  });

  return token;
};
