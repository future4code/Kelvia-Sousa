import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {CreateForm} from './CreateFom';
import {Container} from './styled'

export const CreatePage = () => {
  useProtectedPage()
  
  return (
    <Container>
      < CreateForm/>
    </Container>
  )
}