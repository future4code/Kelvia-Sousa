import React from 'react';
import styled from 'styled-components';

const Corpo = styled.div `
    height: 60vh;
    width: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
` 

export class Etapa2 extends React.Component {
    render () {
        return (
            <Corpo>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5- Qual curso? </p>
                <input></input>
                <p>6- Qual a unidade de ensino? </p>
                <input></input>
            </Corpo>
        )
    }
}