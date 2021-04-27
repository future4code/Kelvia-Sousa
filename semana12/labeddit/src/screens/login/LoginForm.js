import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { InputsContainer } from "./styled";
import {BASE_URL} from '../../constants/Url'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';

export const LoginForm = () => {
  useUnprotectedPage();
  const history = useHistory();

  const [form, onChange, clear] = useForm({email: "", password: "",});

  const handleClick = (event) => {
    login()
    event.preventDefault();
    
  };

  const login = () => {
    axios.post(`${BASE_URL}/login`, form)
    .then((response) => {
      console.log(response.data)
      window.localStorage.setItem("token", response.data.token)
      clear();
      history.push('/')
    })
    .catch((error) => {
      alert('Não foi possível concluir a solicitação. Verifique se os dados digitados estão corretos');
    });
  }

  return (
    <InputsContainer onSubmit={handleClick}>
      <input
        placeholder={"E-mail"}
        type={"email"}
        name={"email"}
        value={form.email}
        onChange={onChange}
        required
      />

      <input
        placeholder={"Senha"}
        type={"password"}
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
      />
      <button type={"submit"} onClick={login}>ACESSAR LABEDDIT</button>
    </InputsContainer>
  );
};
