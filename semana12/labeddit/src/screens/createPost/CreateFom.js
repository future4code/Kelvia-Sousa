import React from "react";
import {InputsContainer} from './styled';
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from '../../constants/Url';
import axios from 'axios'
import { goToFeed } from "../../routes/Coordinator";


export const CreateForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({title: "", text: "",});

  const handleClick = (event) => {
    createPost() 
     event.preventDefault();
     clear();
     console.log(form)
   };
  
   const createPost = () => {
    axios
    .post(`${BASE_URL}/posts`, form, { 
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      alert(response.data.message)
      goToFeed(history)
    })
    .catch((error) => {
      console.log(error.response.data.message);
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

      <textarea
        placeholder={"Texto"}
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


