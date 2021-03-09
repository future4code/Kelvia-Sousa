import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFTz3PaYBvizg/profile-displayphoto-shrink_200_200/0/1608637456838?e=1620864000&v=beta&t=frJiABA0TDE1fIyR64HW_Gn_kr2a3dmOwdYDdaSirg0" 
          nome="Kelvia Santos" 
          descricao="Oi, eu sou a Kelvia. Amo tecnologia e estou me preparando para atuar na área de desenvolvimento de projetos web."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="section-contato">
        <CardPequeno
          icon="https://th.bing.com/th/id/OIP.JHQXEPQ-0ZWWNwg4qEaRkAHaHa?pid=ImgDet&rs=1"
          texto="Email: kelviaks@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem="https://th.bing.com/th/id/OIP.9A8_xFkeHgInPy2RwYfULQHaHa?w=162&h=180&c=7&o=5&pid=1.7" 
          nome="Labenu" 
          descricao="Estudante Full Stack Web Developer." 
        />
        
        <CardGrande 
          imagem="https://th.bing.com/th/id/OIP.u5ogIlBv5qUF4o7zH-D6bwHaHa?w=170&h=180&c=7&o=5&pid=1.7" 
          nome="Cesar School" 
          descricao="Pós-graduanda em Gestão Ágil de Projetos ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
