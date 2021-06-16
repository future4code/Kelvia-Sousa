import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { signupInputDTO, user } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   signupInput: signupInputDTO
):Promise<string> => {
   if (
      !signupInput.name ||
      !signupInput.nickname ||
      !signupInput.email ||
      !signupInput.password ||
      !signupInput.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(signupInput.password);

   const newUser: user = {
      ...signupInput,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: signupInput.role
   })

   return token

}
