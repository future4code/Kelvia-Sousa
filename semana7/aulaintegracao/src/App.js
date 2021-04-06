import Creat from "./components/Create";
import List from "./components/List";
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  color: white;
  background-color: blueviolet;
`

export default class App extends React.Component {
  state ={
      novo: true
  }

  mostrarLista = () => {
    this.setState(
      {
        novo: !this.state.novo
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.mostrarLista}>Ver lista / Voltar</Button>
        {this.state.novo ? <Creat/>: <List/>}
      </div>
    );
  }
}


