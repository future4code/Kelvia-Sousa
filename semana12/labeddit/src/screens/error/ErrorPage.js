import React from "react";
import { ErroContainer } from "./styled";
import error from "../../assets/errorLogo.png";

export const ErrorPage = () => {
  return (
    <ErroContainer>
      <img src={error} alt="logo sad" />
      <h1> Erro 404 - Página não Encontrada </h1>
    </ErroContainer>
  );
};
