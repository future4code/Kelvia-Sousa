import React from 'react';
import { RegisterForm } from './RegisterForm';
import { RegisterContainer} from './styled';


export const RegisterPage = ({setRightButtonText}) => {
  
  return (
    <RegisterContainer>
      <RegisterForm  setRightButtonText={setRightButtonText}/>
    </RegisterContainer>
  )
}