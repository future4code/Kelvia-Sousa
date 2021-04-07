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
    >svg{
        cursor: pointer;
    }   
` 
const Div = styled.div`
  margin: 5px 5px 20px 5px;
  width: 80%;
  height: 400px;
` 
const Li = styled.li`
    width: 100%;
    
    display: flex;
    justify-content: center;
    margin-top: 5px;
    img{
        width: 90px;
        height: 70px;
        border-radius: 10px;
    }
`

const Matches = (props) => {
    const [matches, setMatches] = useState([])

    useEffect(() =>{
        getMatches(props.matches);
    }
    ,[props.matches]);

    const getMatches = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/matches')
        .then((response) => setMatches(response.data.matches))
        .catch((error) => console.log(error))
    }

    const seeMatches = matches.map((person) =>{
        return(
            <Li>
            <img src={person.photo} alt={person.name}/>
            <p>{person.name}</p>
            </Li>
        )
    })

    return(
        <Container>
        <Header>
        <AccountBoxIcon onClick={() => props.changePages()} style={{ fontSize: 40, color: green[500]}}/>
        <h2><span>labe</span>match</h2>
        </Header>
      
      <Div>
        {seeMatches}
      </Div>
      
    </Container>
    )
}

export default Matches;