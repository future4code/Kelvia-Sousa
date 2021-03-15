import React from 'react';
import styled from 'styled-components';

const Corpo = styled.div `
    height: 80vh;
    width: 500px;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
` 

export class Etapa3 extends React.Component {
    render () {
        return (
            <Corpo>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>5- Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6- Você fez algum curso complementar? </p>
                <select>
                    <option>Não fiz curso complementar</option>
                    <option>Curso técnico</option>
                    <option>Cursos de inglês</option>
                </select>
            </Corpo>
        )
    }
}