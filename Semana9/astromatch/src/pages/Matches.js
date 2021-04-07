import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red, blue, green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import axios from 'axios';

const Container = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: 4px solid black;
  border-radius: 15px;
  left: 500px;
h2{
  color: blue;
}
  span{
    color: violet;
  }
` 
const Header =styled.div`
    width: 100%;
    margin: 5px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    >h2{
       margin-right: 50px; 
    }    
` 
const Div = styled.div`
  margin: 5px 5px 20px 5px;
  width: 80%;
  height: 400px;
` 

const GetMatches = () => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/matches')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}

const Matches = (props) => {
    return(
        <Container>
        <Header>
        <AccountBoxIcon style={{ fontSize: 40, color: green[500]}}/>
        <h2><span>labe</span>match</h2>
        </Header>
      
      <Div>
        
      </Div>
      
    </Container>
    )
}

export default Matches;