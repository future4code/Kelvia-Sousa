import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcador from '../../img/bookmark_border-24px.svg'
import iconeMarcadorPreto from '../../img/bookmark-black-18dp.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    numeroMarcado: 0,
    compartilhado: false
  }

  onClickCurtida = () => {
    /* console.log('Curtiu!') */
    let quantidadeCurtida

    if(this.state.curtido){
      quantidadeCurtida = this.state.numeroCurtidas - 1 // pois inicia false
    }else {
      quantidadeCurtida = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido, // coração preto
      numeroCurtidas: quantidadeCurtida // quantidade curtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcador = () => {
    let quantidadeMarcador

    if(this.state.marcado){
      quantidadeMarcador = this.state.numeroMarcado - 1 // pois inicia false
    }else {
      quantidadeMarcador = this.state.numeroMarcado + 1
    }

    this.setState({
      marcado: !this.state.marcado,
      numeroMarcado: quantidadeMarcador
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }


    let iconeMarca

    if(this.state.marcado) {
      iconeMarca = iconeMarcadorPreto
    } else {
      iconeMarca = iconeMarcador
    }

    let componenteCompartilhar

    if(this.state.compartilhado){
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilharPost}/>
    }


    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarca}
          onClickIcone={this.onClickMarcador}
          valorContador={this.state.numeroMarcado}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickShare}
        />

      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post