import React,  {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Router } from './routes/Router';

const  App = () => {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <>
    <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router setRightButtonText={setRightButtonText}/>
    </BrowserRouter>
    </>
  );
}

export default App;