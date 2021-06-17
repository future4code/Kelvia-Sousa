import { CustomError } from "./CustomErros";


export class NotFoundError extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado, verifica se o email e/ou senha estão corretos ")
  }
}
