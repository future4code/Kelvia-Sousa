import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFTz3PaYBvizg/profile-displayphoto-shrink_200_200/0/1608637456838?e=1620864000&v=beta&t=frJiABA0TDE1fIyR64HW_Gn_kr2a3dmOwdYDdaSirg0" 
          nome="Kelvia Santos" 
          descricao="Oi, eu sou a Kelvia. Amo tecnologia e estou me preparando para atuar na área de desenvolvimento de projetos Web."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="section-contato">
        <CardPequeno
          icon="https://th.bing.com/th/id/OIP.JHQXEPQ-0ZWWNwg4qEaRkAHaHa?pid=ImgDet&rs=1"
          referente="Email: "
          texto=" kelviaks@hotmail.com"
        />
      </div>
      <div className="section-contato">
      <CardPequeno
          icon="https://cdn.onlinewebfonts.com/svg/img_93271.png"
          referente="Endereço: "
          texto=" Olinda-PE"
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

        <CardGrande 
          imagem="https://blog.grancursosonline.com.br/wp-content/uploads/2017/06/UPE_quad-300x300.png" 
          nome="Universidade de Pernambuco- UPE" 
          descricao="Graduada em Gestão Logística." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Profissionais</h2>
        <CardGrande
          imagem="https://th.bing.com/th/id/OIP.p5ct0B9X4rv141_g5fSgpgHaFs?pid=ImgDet&rs=1"
          nome="TRE - PERNAMBUCO"
          descricao="Estagiária Logística - Controle de estoque e distribuição de urnas eletrônicas e seus suprimentos para as zonas eleitorais do Estado."
        />
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-ufpe-2-2.jpg"
          nome="Univesidade Federal de Pernambuco - UFPE"
          descricao="Bolsista de desenvolvimento Profissional na divisão de apoio na biblioteca Central."
        />
        <CardGrande
          imagem="https://th.bing.com/th/id/OIP.vgCXm1JyCailLpIMNooEUAAAAA?pid=ImgDet&rs=1" 
          nome="Fuctura Tecnologia"
          descricao="Consultora de vendas - cursos de software livre." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Linkedin_Shiny_Icon.svg/1024px-Linkedin_Shiny_Icon.svg.png" 
          texto="LinkedIn" 
        />  

        <ImagemButton 
          imagem="https://th.bing.com/th/id/OIP.ckeUFk-yid0vfWnd56w7wAHaHa?pid=ImgDet&rs=1" 
          texto="GitHUb" 
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
