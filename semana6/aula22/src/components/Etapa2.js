import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from "./PerguntaAberta";

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
                <PerguntaAberta perguntas={"5- Qual curso?"} />
                <PerguntaAberta perguntas={"6- Qual a unidade de ensino?"} />
            </Corpo>
        )
    }
}