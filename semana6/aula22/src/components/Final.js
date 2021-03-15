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

export class Final extends React.Component {
    render () {
        return (
            <Corpo>
                <h3>FIM DO FORMULÁRIO</h3>
                <p>Obrigada por participar. Entraremos em contato!</p>
            </Corpo>
        )
    }
}