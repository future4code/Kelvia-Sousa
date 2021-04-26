import React from 'react';
import {InputsContainer, LoginContainer} from './styled';
import {useForm} from '../../hooks/useForm'

export const LoginPage = () => {
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',
  })
  const onSubmitForm = (event) => event.preventDefault() 

  return (
    <LoginContainer>
      <InputsContainer OnSubmit={onSubmitForm()}>
    
    <input 
    placeholder={'E-mail'}
    type={"email" }
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
  
  <button type={"submit"} >ACESSAR LABEDDIT</button>
    </InputsContainer>
    </LoginContainer>
  )
}