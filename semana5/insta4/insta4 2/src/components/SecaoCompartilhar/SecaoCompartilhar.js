import React, {Component} from 'react'
import './SecaoCompartilhar.css'

import iconeFace from '../../img/facebook-24px.svg'
import iconeInsta from '../../img/instagram.png'
import iconeTwitter from '../../img/twitter.png'

export class SecaoCompartilhar extends Component {
    state = {
        opcoesCompartilhar: ''
    }

    onClickShare = (event) => {
        this.setState({opcoesCompartilhar: event })
    }

    render () {
        return <div className={'compartilhar-container'} >
            <div className='redes'>
                <img src={iconeFace} onClick={this.props.aoCompartilhar} />
                <img src={iconeInsta} onClick={this.props.aoCompartilhar} />
                <img src={iconeTwitter} onClick={this.props.aoCompartilhar} />
            </div>
        </div>
    }
}
