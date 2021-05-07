import React from "react";
import logo from "../../assets/logo.png";
import { LoginContainer } from "./styled";
import { LoginForm } from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToRegister } from "../../routes/Coordinator";

export const LoginPage = ({ setRightButtonText }) => {
  const history = useHistory();

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <LoginForm setRightButtonText={setRightButtonText} />
      <span>Não possui conta?</span>
      <button type={"submit"} onClick={() => goToRegister(history)}>
        CADASTRE-SE
      </button>
    </LoginContainer>
  );
};
