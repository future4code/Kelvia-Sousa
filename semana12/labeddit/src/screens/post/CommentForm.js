import React from "react";
import axios from "axios";
import { InputsContainer } from "./styled";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Url";

export const CommentForm = (props) => {
  const params = useParams();
  const [form, onChange, clear] = useForm({ text: "" });

  const handleClick = (event) => {
    event.preventDefault();
    createComment();
  };

  const createComment = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        clear();
        props.getPost();
      })
      .catch((error) => {
        alert(error.data.message);
      });
  };

  return (
    <InputsContainer onSubmit={handleClick}>
      <textarea
        placeholder={""}
        type={"text"}
        name={"text"}
        value={form.text}
        onChange={onChange}
      />
      <button type={"submit"} onclick={() => createComment()}>
        {" "}
        ENVIAR{" "}
      </button>
    </InputsContainer>
  );
};
