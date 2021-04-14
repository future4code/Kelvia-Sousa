import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router";
import { goToAdminTripList } from "../routes/coordinator";
import FormCreat from "../components/FormCreat";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
  }
  svg:hover {
    transform: scale(1.4);
  }
`;
const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  li {
    list-style: none;
  }
`;

const CreateTripPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    const body = {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
    }; //como usar, o input do form, aqui?

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips",
        body
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Div>
      <Header />
      <KeyboardBackspaceIcon
        onClick={() => {
          goToAdminTripList(history);
        }}
        style={{ fontSize: 50 }}
      />
      <Main>
        <FormCreat />
        <Button
          onClick={createTrip}
          variant="contained"
          color="primary"
          style={{ fontSize: 15 }}
        >
          Send
        </Button>
      </Main>
      <Footer />
    </Div>
  );
};

export default CreateTripPage;
