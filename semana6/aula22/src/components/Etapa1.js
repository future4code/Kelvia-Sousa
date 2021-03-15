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



export class Etapa1 extends React.Component {
    render () {
        return (
            <Corpo>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1 - Qual o seu nome? </p>
                <input></input>
                <p>2 - Qual sua idade? </p>
                <input></input>
                <p>2 - Qual seu email? </p>
                <input></input>
                <p>4 - Qual a sua escolaridade </p>
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