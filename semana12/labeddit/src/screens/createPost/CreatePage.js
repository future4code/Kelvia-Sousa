import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {CreateForm} from './CreateFom';

export const CreatePage = () => {
  useProtectedPage()
  
  return (
    <div>
      <h1> Crie aqui </h1>
      < CreateForm/>
    </div>
  )
}