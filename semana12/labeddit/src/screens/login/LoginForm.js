import React from "react";
/* import { useHistory } from "react-router-dom"; */
import { useForm } from "../../hooks/useForm";
import { InputsContainer } from "./styled";

export const LoginForm = () => {
  /* const history = useHistory(); */

  const [form, onChange, clear] = useForm({email: "", password: "",});

  const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault();
    clear();
  };

  return (
    <InputsContainer onSubmit={onSubmitForm}>
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
      <button type={"submit"}>ACESSAR LABEDDIT</button>
    </InputsContainer>
  );
};
