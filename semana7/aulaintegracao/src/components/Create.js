import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
`

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  width: 40vh;
  padding: 40px;
  border: 1px solid black;
`

export default class Creat extends React.Component {
    state = {
        name: '',
        email:''
    }

    componentDidMount() {
        this.createUser();
      }

    handleInputChange = (event) => {
        this.setState({name: event.target.value})
    }
    handleInputChange = (event) => {
        this.setState({email: event.target.value})
    }

    createUser = () => {
        const body = {
          name: this.state.name,
          email: this.state.email
        };
        axios
          .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,{
                headers: {
                    Authorization: "kelvia-santos-cruz"
                }
            }
          )
          .then((res)=> {
            this.setState({name:''})
            this.setState({email:''})

          })
          .catch((err) => {
            console.log(err.response.data)
          })
      }

  render() {
    return(
        <Container>
            <Entradas>
                <label>Nome:</label>
                <input type="text" value={this.state.nameValue} onChange={this.handleInputChange}/>
                <label>Email:</label>
                <input type="email" value={this.state.emailValue} onChange={this.handleInputChange}/>
                <button onClick={this.createUser} >Enviar</button>
            </Entradas>
        </Container>
    )
  }
}
