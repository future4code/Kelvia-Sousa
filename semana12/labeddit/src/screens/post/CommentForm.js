import React from 'react';
import {InputsContainer} from './styled';
import { useForm } from "../../hooks/useForm";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/Url';

export const CommentForm = () => {
  const params = useParams()
  const [form, onChange, clear] = useForm({text: ""});

  const handleClick = (event) => {
    event.preventDefault();
    createComment()
  };

  const createComment = () => {
    axios
    .post(`${BASE_URL}/posts/${params.id}/comment`, form, { 
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response.data)
    clear();
    window.location.reload()
    })
    .catch((error) => {
      console.log(error.data.message)
    });
  }

  return (
    <InputsContainer onSubmit={handleClick}>
 <textarea
        placeholder={""}
        type={"text"}
        name={"text"}
        value={form.text}
        onChange={onChange}
      />
<button type={"submit"} onclick={()=> createComment()}> ENVIAR COMENTÁRIO </button>
</InputsContainer>
)
}