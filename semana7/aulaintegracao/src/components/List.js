import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../parametros";
import Details from '../components/Details'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FullList = styled.div`
  font-size: 18px;
`
const Lista = styled.li`
  display: flex;
  width: 40vh;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;
`
const ButtonDelete = styled.span`
  color: red;
  cursor: pointer;
` 

const ButtonDetails = styled.button`
  color: blue;
  cursor: pointer;
  font-size: 18px;
  border: none;
` 

export default class List extends React.Component {
  state ={
    lista: [],
  }
  
  componentDidMount() {
    this.getAllUsers()
  }

  /* getAllUsers = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({lista: res.data})
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  } */

  getAllUsers = async () => {
    try {
    const response = await axios.get(baseUrl, axiosConfig)
    this.setState({lista: response.data})
    } catch(err) {
      console.log(err)
    }
  }

  getUserById = async (id) => {
    try{
    const response = await axios(`${baseUrl}/${id}`, axiosConfig)
    this.setState({lista: response.data})
    }catch(err){
        console.log(err)
    }
  }
  

  deleteUser = (id) => {
    if(window.confirm('Esta ação excluirá o usuário. Deseja continuar?')) {
    axios
      .delete(`${baseUrl}/${id}`, axiosConfig) // `url/${id}`
      .then((res) => { 
        console.log(res)
        this.getAllUsers()
        alert('Usuário foi deletado')
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  }
  

    render() {
      const UsersLis = this.state.lista.map((user) => {
        return (
        <Lista key={user.id}>{user.name}

        <ButtonDetails onClick={() => this.getUserById(user.id)}>+</ButtonDetails>

        <ButtonDelete onClick={() => this.deleteUser(user.id)}>X</ButtonDelete>
        
        </Lista>
        );
      });
      
      return(
        <ListContainer>
          <h2>Usuários Cadastrados</h2>
        <FullList>
          {UsersLis}
        </FullList>
        </ListContainer>
      );
    }
}