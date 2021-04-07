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
       margin-right: 80px; 
    }  
    >svg{
        cursor:pointer;
    }  
` 
const Div = styled.div`
  margin: 5px 5px 20px 5px;
  width: 80%;
  height: 400px;
  border: 1px solid gray;
` 
const Choice = styled.div`
  padding: 20px 0;
  width: 80%;
  display: flex;
  justify-content: space-around;
  >*{
    cursor: pointer;
  }
`
const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    img{
        height: 300px;
    }
    p{
        margin-top: 0;
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
          <p>{profile.bio}</p>
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
        <h2><span>labe</span>match</h2>
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