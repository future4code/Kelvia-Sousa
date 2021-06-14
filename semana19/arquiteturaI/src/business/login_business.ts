import { compare } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import { user } from "../model/user";
import { loginUser } from "../data/loginUser";

export const loginBusiness = async ( email: string,
  password: string) : Promise<string> => {
  if (!email || !password) {
    throw new Error("Please fill fields");
  }

  const user: user = await loginUser(email)
  if (!user) {
    throw new Error("User not found");
  }
 
  const passwordIsCorrect: boolean = await compare(password, user.password)
  if (!passwordIsCorrect) {
    throw new Error("Usuário não encontrado ou senha incorreta")
 }
 const token: string = generateToken({
  id: user.id,
  role: user.role
})
return token
}
