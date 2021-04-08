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
    margin:0;
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
  margin: 5px;
  width: 80%;
  height: 380px;
  border-radius: 5px;
  background-color: mediumseagreen;
  span{
    color: white;
    margin: 0 10px;
  }
  p{
    color: white;
    font-size: 20px;
    margin: 0 10px;
    font-family: "Lucida Console", "Courier New", monospace;
  }
  @media only screen and (max-width: 350px){
    p{
      font-size: 12px;
    }
    span{
    font-size: 16px;
  }
}
` 
const Choice = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  >svg:hover {
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
`
const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    img{
        height: 300px;
        border-radius: 5px;
    }
    p{
        margin-top: 10px;
        
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
        <FavoriteIcon onClick={() => ChoosePerson(true)} style={{ fontSize: 50, color: red[500]}}></FavoriteIcon>
        <CloseIcon onClick={() => ChoosePerson(false)} style={{ fontSize: 50, color: blue[500]}}></CloseIcon>
      </Choice>
    </Container>
  )
}

export default HomeScreen;