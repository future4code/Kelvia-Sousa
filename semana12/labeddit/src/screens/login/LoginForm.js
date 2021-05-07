import axios from "axios";
import React from "react";
import { InputsContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/Url";
import { goToFeed } from "../../routes/Coordinator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginForm = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const handleClick = (event) => {
    login(setRightButtonText);
    event.preventDefault();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clear();

        goToFeed(history);
        setRightButtonText("Logout");
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <InputsContainer onSubmit={handleClick}>
      <input
        placeholder={"E-mail"}
        type={"email"}
        name={"email"}
        value={form.email}
        onChange={onChange}
        required
      />

      <input
        placeholder={"Senha"}
        type={"password"}
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
      />
      <button type={"submit"} onClick={login}>
        ACESSAR LABEDDIT
      </button>
    </InputsContainer>
  );
};
