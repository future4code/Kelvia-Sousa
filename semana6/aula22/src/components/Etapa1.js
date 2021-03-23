import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

const Corpo = styled.div `
    height: 60vh;
    width: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
` 


export class Etapa1 extends React.Component {
    render () {
        return (
            <Corpo>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <PerguntaAberta perguntas={"1- Qual o seu nome?"} />
                <PerguntaAberta perguntas={"2 - Qual sua idade? "} />
                <PerguntaAberta perguntas={"3 - Qual seu email?"} />
                
                <PerguntaFechada pergunta={'4 - Qual a sua escolaridade?'}/>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </Corpo>
        )
    }
}