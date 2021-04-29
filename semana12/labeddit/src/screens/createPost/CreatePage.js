import React from "react";
import { Container } from "./styled";
import { CreateForm } from "./CreateFom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const CreatePage = () => {
  useProtectedPage();

  return (
    <Container>
      <CreateForm />
    </Container>
  );
};
