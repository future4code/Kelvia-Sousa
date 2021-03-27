import React from 'react';
import styled from 'styled-components';
import Create from './pages/Create';
import View from './pages/View';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  min-width: 350px;
  
` 
const Button = styled.button`
  margin: 10px;
` 
const Header = styled.header`
  border-bottom: 1px solid blue;
  width: 100vh;
`

const Footer = styled.footer`
  border-top: 1px solid blue;
  width: 100vh;
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
          <h1>Footer</h1>
        </Footer>
      </Content>
    );
  }
  
}
