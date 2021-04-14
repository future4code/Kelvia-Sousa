import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { goToHomePage } from "../routes/coordinator";
import { useHistory } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { fade, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import useInput from "../hooks/useInput";
import axios from "axios";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

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
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  input {
    margin-bottom: 20px;
  }
  button {
    margin-top: 30px;
  }
`;

const LoginPage = () => {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const history = useHistory();

  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/login", //usar a urlbase
        body
      )
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
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
          goToHomePage(history);
        }}
        style={{ fontSize: 50 }}
      />

      <Main>
        <FormControl>
          <InputLabel shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <BootstrapInput type="email" value={email} onChange={handleEmail} />
        </FormControl>
        <FormControl>
          <InputLabel shrink htmlFor="bootstrap-input">
            Password
          </InputLabel>
          <BootstrapInput
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </FormControl>
        <Button
          onClick={login}
          variant="contained"
          color="primary"
          style={{ fontSize: 15 }}
        >
          Login
        </Button>
      </Main>
      <Footer />
    </Div>
  );
};

export default LoginPage;
