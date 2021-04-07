import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red, blue } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
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

const Photos = styled.div`
  margin: 10px 5px 20px 5px;
  width: 80%;
  height: 400px;
  border: 1px solid gray;
` 

const Choice = styled.div`
  padding: 20px 0;
  width: 80%;
  display: flex;
  justify-content: space-around;
`
const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
` 


const HomeScreen = (props) => {
  const [profile, setProfile] = useState({})
  

  const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/person'
  
  useEffect(() =>{
    getProfileToChoose(props.profile);
  }
  ,[props.profile]);

    const getProfileToChoose = () => {
      axios
      .get(baseUrl)
      .then((response) => setProfile(response.data.profile))
      .catch((error) => console.log(error))
    };
    

  const profiles = () => {
      console.log('abc',profile)
      return (
        <Profiles>
          <img src={profile.photo} alt={profile.name}/>
          <p>{profile.name}, {profile.age}</p>
          <p>{profile.bio}</p>
        </Profiles>
      );
    }; 
  
  return(
    <Container>
      <h2><span>labe</span>match</h2>
      <Photos>
        {profiles()}
      </Photos>
      <Choice>
        <FavoriteIcon style={{ fontSize: 50, color: red[500]}}></FavoriteIcon>
        <CloseIcon style={{ fontSize: 50, color: blue[500]}}></CloseIcon>
      </Choice>
    </Container>
  )
}

export default HomeScreen;