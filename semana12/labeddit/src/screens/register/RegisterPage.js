import React from "react";
import { RegisterContainer } from "./styled";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage = ({ setRightButtonText }) => {
  return (
    <RegisterContainer>
      <RegisterForm setRightButtonText={setRightButtonText} />
    </RegisterContainer>
  );
};
