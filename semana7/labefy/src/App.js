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
  margin-top: 48px;
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
        {this.state.pages ? <Create/> : <View/>}
        <Button onClick={this.changePage}>See your playlists / Create </Button>
      </Content>
    );
  }
  
}
