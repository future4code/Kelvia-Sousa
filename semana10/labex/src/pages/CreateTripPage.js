import React from "react";
import styled from "styled-components";
import { goToAdminTripList } from "../routes/coordinator";
import FormCreat from "../components/FormCreat";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 71, 121, 1) 13%,
    rgba(0, 212, 255, 1) 100%
  );

  > button {
    position: absolute;
    top: 20px;
    left: 50px;
    cursor: pointer;
  }
  > button:hover {
    transform: scale(1.4);
  }
`;
const Main = styled.main`
  height: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateTripPage = () => {
  const history = useHistory();

  return (
    <Div>
      <Button
        onClick={() => {
          goToAdminTripList(history);
        }}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Back
      </Button>
      <Main>
        <FormCreat />
      </Main>
    </Div>
  );
};

export default CreateTripPage;
