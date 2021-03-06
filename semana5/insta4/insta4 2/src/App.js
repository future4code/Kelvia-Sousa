import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
      },

      {
      nomeUsuario: 'Kel_via',
      fotoUsuario: 'https://media-exp1.licdn.com/dms/image/C4D03AQFTz3PaYBvizg/profile-displayphoto-shrink_200_200/0/1608637456838?e=1620864000&v=beta&t=frJiABA0TDE1fIyR64HW_Gn_kr2a3dmOwdYDdaSirg0',
      fotoPost: 'https://picsum.photos/300/150',
      },

      {
      nomeUsuario: 'Edite',
      fotoUsuario: 'https://i.pinimg.com/236x/f3/28/8c/f3288cdb177e602aa28c15291ef7407d.jpg',
      fotoPost: 'https://picsum.photos/140/150',
      },
    ],

    valorInputPessoa:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""
  };

  novosPosts = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novaPostagem = [...this.state.posts, novoPost]
    this.setState({posts: novaPostagem})
  }

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value })
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const ListaDeComponentes= this.state.posts.map((post) => {
    return (
    <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>
    )
    });

    return (
    <div>
          <h1>Novo usuário</h1>
      <div>
        <input 
          value={this.state.valorInputPessoa}
          onChange={this.onChangeInputPessoa }
          placeholder={"Nome"}
        />
        <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario } 
          placeholder={"Foto do usuário"}
        />
        <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost } 
          placeholder={"Foto Postagem"}
        />
        <button onClick={this.novosPosts}>Postar</button>
      </div>
      
      <div className={'app-container'}>{ListaDeComponentes}</div>

    </div>
    
    );
  }
}

export default App 
