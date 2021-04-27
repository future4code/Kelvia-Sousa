import React from 'react';
import {InputsContainer} from './styled';
import {useForm} from '../../hooks/useForm';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';

export const RegisterForm  = () => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',
    username: '',
  })
  const handleClick = (event) =>  {
    event.preventDefault()
    clear()
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
  <button type={"submit"}>CONFIRMAR CADASTRO</button>
  </InputsContainer>
  )
}