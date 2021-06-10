import { userAddress } from "../types";
import axios from "axios";

export const getAddressInfo = async (
  cep: string
  ): Promise <userAddress | null> => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
      const address: userAddress = {
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
      }

      return address
    } catch (error) {
      return null;
    }
}