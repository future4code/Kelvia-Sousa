import React from 'react';
import {InputsContainer, RegisterContainer} from './styled';
import {useForm} from '../../hooks/useForm'

export const RegisterPage = () => {
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',
    username: '',
  })
  const onSubmitForm = (event) =>  event.preventDefault()

  return (
    <RegisterContainer>
      <InputsContainer onSubmit={onSubmitForm}>
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
    </RegisterContainer>
  )
}