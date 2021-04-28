import React from "react";
import {InputsContainer} from './styled';
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from '../../constants/Url';
import axios from 'axios'
import { goToFeed } from "../../routes/Coordinator";


export const CreateForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({title: "", text: ""});

  const handleClick = (event) => {
     createPost() 
     event.preventDefault();
   };
  
   const createPost = () => {
    axios
    .post(`${BASE_URL}/posts`, form, { 
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      alert('Postagem criada com sucesso')
      clear();
      goToFeed(history)
    })
    .catch((error) => {
      alert(error)
    });
  }

  return(
    <InputsContainer onSubmit={handleClick}>
      <input
        placeholder={"Título"}
        type={"text"}
        name={"title"}
        value={form.title}
        onChange={onChange}
        required
      />

      <textarea rows='10'
        placeholder={"Escreva seu texto"}
        type={"text"}
        name={"text"}
        value={form.text}
        onChange={onChange}
        required
      />
      <button type={"submit"}  onClick={createPost} >POSTAR</button>
    </InputsContainer>
  )
}


