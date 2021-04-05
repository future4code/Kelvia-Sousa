import React from 'react';
import styled from 'styled-components';
import Create from './pages/Create';
import View from './pages/View';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh; 
` 
const Button = styled.button`
  margin: 0px;
` 
const Header = styled.header`
  height: 17vh;
  border-bottom: 1px solid black;
  width:100%;
  display: flex;
  align-items: center;

`

const Footer = styled.footer`
  height: 17vh;
  border-top: 1px solid black;
  width:100%;
` 

export default class  App extends React.Component {
  state = {
    pages: true
  }

  changePage = () => {
    this.setState({pages: !this.state.pages})
  }

  render() {
    return (
      
      <Content>
        <Header><h1>LABEFY</h1></Header>
        <Button onClick={this.changePage}>See your playlists / Create </Button>
        {this.state.pages ? <Create/> : <View/>}
        <Footer>
            
        </Footer>
      </Content>
    );
  }
  
}
