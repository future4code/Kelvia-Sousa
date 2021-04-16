import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { goToAdminTripList } from "../routes/coordinator";
import FormCreat from "../components/FormCreat";
import { useHistory } from "react-router";

const Div = styled.div`
  width: 100%;
  margin: auto;
  svg {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
    color: gray;
  }
  svg:hover {
    transform: scale(1.4);
  }
`;
const Main = styled.main`
  height: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
`;

const CreateTripPage = () => {
  const history = useHistory();
  
  return (
    <div>
      <Header />
    <Div>
      <KeyboardBackspaceIcon
        onClick={() => {
          goToAdminTripList(history);
        }}
        style={{ fontSize: 50 }}
      />
      <Main>
        <FormCreat />
      </Main>
    </Div>
    <Footer />
    </div>
  );
};

export default CreateTripPage;
