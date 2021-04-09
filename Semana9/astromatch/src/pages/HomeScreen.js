import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red, blue, green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
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
  margin-left: 500px;
  * {
    box-sizing: border-box;
  }
  h1{
    color: blue;
  }
  span{
    color: violet;
  }
  @media only screen and (max-width: 768px){
    width: 90%;
    display:flex;
    flex-direction: column;
    margin:10px;
    padding:0;
}
` 
const Header =styled.div`
    width: 100%;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    >h1{
       font-size: 40px;
       margin:0;
    }
    >svg{
        cursor:pointer;
    }
    svg:hover {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
` 
const Div = styled.div`
  margin-top: 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
` 
const Choice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  >svg:hover {
    cursor: pointer;
    transform: scale(1.4);
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
`
const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    p{
    width: 80%;
    text-shadow: 2px 0 5px darkgray;
    position: absolute;
    top: 420px;
    font-size: 20px;
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace;
    
    }
    span{
    font-weight: bold;
    text-shadow: 4px 4px 5px darkgray;
    border-radius: 6px;
    position: absolute;
    margin-top: 390px;
    width: 80%;
    color: black;
    font: 19px "comic Sans MS", cursive;
    line-height: 16px;
    text-align: center;
    }
    img{
        height: 450px;
        border-radius: 5px;
    }
    @media only screen and (max-width: 350px){
      p{
        font-size: 20px;
      }
      span{
      font-size: 18px;
      }
    }
` 

const HomeScreen = (props) => {
  const [profile, setProfile] = useState({})

  useEffect(() =>{
    getProfileToChoose(props.profile);
  }
  ,[props.profile]);


    const getProfileToChoose = () => {
      axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/person')
      .then((response) => setProfile(response.data.profile))
      .catch((error) => console.log(error))
    };
    

  const profiles = () => {
      return (
        <Profiles>
          <img src={profile.photo} alt={profile.name}/>
          <p>{profile.name}, {profile.age}</p>
          <span>{profile.bio}</span>
        </Profiles>
      );
    }; 

    const ChoosePerson = (choices) => {
        const body = {
            id: profile.id,
            choice: choices
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/choose-person', body)
        .then((response) => getProfileToChoose())
        .catch((error) => console.log(error))
    }

    

  return(
    <Container>
        <Header>
        <h1><span>labe</span>match</h1>
        <GroupAddIcon onClick={() => props.changePages()} style={{ fontSize: 40, color: green[500]}}/>
        </Header>
      <Div>
        {(profile && Object.keys(profile).length !== 0) && profiles()}
      </Div>
      <Choice>
        <FavoriteIcon onClick={() => ChoosePerson(true)} style={{ fontSize: 45, color: red[500]}}></FavoriteIcon>
        <CloseIcon onClick={() => ChoosePerson(false)} style={{ fontSize: 50, color: blue[500]}}></CloseIcon>
      </Choice>
    </Container>
  )
}

export default HomeScreen;