import React from "react";
import axios from "axios";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../parametros";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vh;
  padding: 40px;
  border: 1px solid black;
`

const SendButton = styled.button`
  cursor: pointer;
  width: 80px;
  margin: auto;
  margin-top: 10px;
  color: white;
  background-color: blueviolet;
`

export default class Creat extends React.Component {
    state = {
        name: '',
        email:''
    }

    componentDidMount() {
        
    }

    handleName = (event) => {
        this.setState({name: event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    createUser = () => {
        const body = {
          name: this.state.name,
          email: this.state.email
        };
        console.log(body)
        axios
          .post(baseUrl, body, axiosConfig)
        .then((res)=> {
            this.setState({name:'', email:''})
            alert('Usuário Adicionado!')
            console.log(res)
          })
          .catch((err) => {
            console.log(err.response.data.message)
            alert('O Usuário não foi adicionado, tente novamente')
          })
    }


  render() {
    return(
        <Container>
          <h2>Adicione Novos Usuários</h2>
            <Entradas>
                <label>Nome:</label>
                <input type="text" value={this.state.name} onChange={this.handleName}/>
                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={this.handleEmail}/>
                <SendButton onClick={this.createUser}>Enviar</SendButton>
            </Entradas>
        </Container>
    )
  }
}
