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
import axios from "axios";
import { useForm } from "../hooks/useForm";

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
    color: gray;
  }
  svg:hover {
    transform: scale(1.4);
  }
`;
const Main = styled.form`
  min-height: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  input {
    font-size: 30px;
    margin-bottom: 20px;
  }
  button {
    margin-top: 30px;
    width: 150px;
    
  }
`;

const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };
  const history = useHistory();

  const login = () => {
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/login",
        body
      )
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        alert(error);
      }); //usar a urlbase
  };

  

  return (
    <div>
    <Header/>
    <Div>
      
      <KeyboardBackspaceIcon
        onClick={() => {
          goToHomePage(history);
        }}
        style={{ fontSize: 50 }}
      />

      <Main onSubmit={handleClick}>
        <FormControl required>
          <InputLabel shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <BootstrapInput inputProps={{ pattern: "(/$|.+@.+./)"}} name='email' type="email" required value={form.email} onChange={onChange}  />
        </FormControl>
        <FormControl required>
          <InputLabel shrink htmlFor="bootstrap-input">
            Password
          </InputLabel>
          <BootstrapInput
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            
          />
        </FormControl>
        <Button
          onClick={login}
          variant="contained"
          color="primary"
          style={{ fontSize: 22 }}
        >
          Login
        </Button>
      </Main>
      
    </Div>
    <Footer />
    </div>
  );
};

export default LoginPage;
