import React, {useState} from 'react';
import styled from 'styled-components';
import HomeScreen from './pages/HomeScreen';
import Matches from './pages/Matches'


export default function App() {
  const [pages, setPages] = useState(true)

  const changePages = () =>{
    setPages(!pages)
  }
  
  return (
    <div>
      {pages ? <HomeScreen changePages={changePages}/>: <Matches changePages={changePages}/>} 
    </div>
  );
}