import React from 'react';
import styled from 'styled-components'
import List from '../components/List'


export default class Details extends React.Component {
    state ={
        detalhes: []
    }

    render() {
    const DetailsUser = this.state.detalhes.map((user) => {
        return (
           <p>
            {user.name}
           {user.email}
           </p>
        )
    });
    return (
        <div>
        <h2>Detalhes do Cadastro do Usuário</h2>
          <div>{DetailsUser}</div>
        </div>
        )
    }
}

