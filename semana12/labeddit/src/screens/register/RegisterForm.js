import React from 'react';
import {InputsContainer} from './styled';
import {useForm} from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import axios from 'axios';
import {BASE_URL} from '../../constants/Url'
import { goToFeed } from '../../routes/Coordinator';

export const RegisterForm  = ({ setRightButtonText}) => {
  const history = useHistory();
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',
    username: '',
  })
  const handleClick = (event) =>  {
    event.preventDefault()
  }

  const signup = () => {
    axios.post(`${BASE_URL}/signup`, form)
    .then((response) =>{
      window.localStorage.setItem("token", response.data.token);
      alert('Cadastro realizado com sucesso. Aproveite o LabEdiit')
      clear();
      goToFeed(history);
      setRightButtonText('Logout');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
      <InputsContainer onSubmit={handleClick}>
    <input 
    placeholder={'Nome'}
    type={"text"}
    name={"username"} 
    value={form.username}
    onChange={onChange}
    required
    />
    <input 
    placeholder={'Email'}
    type={"email"} 
    name={"email"} 
    value={form.email}
    onChange={onChange}
    required
    />
    <input 
    placeholder={'Senha'}
    type={"password"} 
    name={"password"} 
    value={form.password}
    onChange={onChange}
    required
    />
  <button type={"submit"} onClick={signup}>CONFIRMAR CADASTRO</button>
  </InputsContainer>
  )
}