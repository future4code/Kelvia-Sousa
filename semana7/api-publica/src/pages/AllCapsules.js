import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {baseUrl} from '../parameters'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
` 

const CapsulesContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  width: 50vh;
` 

const Titulo = styled.b`
  font-size: 18px;
`

export default class AllCapsules extends React.Component{
  state = {
    capsules: [],
  };

  componentDidMount(){
    this.getAllCapsules();
  };
  
  getAllCapsules = async () => {
    try{
      const response = await axios.get(baseUrl);
      console.log(response.data)
      this.setState({capsules: response.data})
    }catch(error){
      console.log(error)
    }
  }
  
  render() {
    const capsulesList = this.state.capsules.map((capsule) => {
      return (
        <CapsulesContainer key={capsule.capsule_serial}>
          <p><Titulo>Serial:</Titulo> {capsule.capsule_serial}</p>
          <p><Titulo>Id:</Titulo> {capsule.capsule_id}</p>
          <p><Titulo>Status: </Titulo>{capsule.status}</p>
          <p><Titulo>Date:</Titulo> {capsule.original_launch}</p>
          {capsule.missions.length > 0 && <p><Titulo>Mission:</Titulo> {capsule.missions[0].name } <b>Flight</b> {capsule.missions[0].flight} </p>}
          <p><Titulo>Landings:</Titulo> {capsule.landings}</p>
          <p><Titulo>Type:</Titulo> {capsule.type}</p>
          <p><Titulo>Reuse:</Titulo> {capsule.reuse_count}</p>
        </CapsulesContainer>
      )
    })
    return(
      <Container>
        <h1> SpaceX API - GET All Capsules</h1>
        <div>{capsulesList}</div>
      </Container>
    )
  }
}