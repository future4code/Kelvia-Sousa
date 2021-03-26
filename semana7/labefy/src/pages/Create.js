import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../parameters';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1280px;
  min-width: 350px;
  margin-top: 48px;
` 
const UserCreation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default class Create extends React.Component{
  state = {
    name: ''
  };

  handleName = (event) => {
    this.setState({name: event.target.value})
  };

 createPlaylist = () => {
  const body = {
    name: this.state.name
  };
  console.log(body)
  axios.post(baseUrl, body, axiosConfig)
  .then((response) => {
    this.setState({name: ''})
    alert('Success. Your playlist has been created')
    console.log(response)
  })
  .catch((error) => {
    console.log(error.response.data.message)
    alert('Sorry, try creating playlist again')
  })
 };

 render () {
   return (
      <Content>
        <UserCreation>
          <h1>LABEFY</h1>
          <h2>Create your favorite playlists</h2>
          <label>Your Playlist Name</label>
          <input
          placeholder='name'
          value={this.state.name}
          onChange={this.handleName}
          />
          <button onClick={this.createPlaylist}>Create</button>
        </UserCreation>
      </Content>
   )
 }
}