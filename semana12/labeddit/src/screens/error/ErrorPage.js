import React from 'react';
import error from '../../assets/errorImage.png';
import {ErroContainer} from './styled'

export const ErrorPage = () => {
  return (
    <ErroContainer>
      <img src={error}/>
      <h1> Erro 404 - Página não Encontrada </h1>
    </ErroContainer>
  )
}