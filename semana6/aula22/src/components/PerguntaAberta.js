import React from 'react';
import styled from 'styled-components'

const PerguntasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function PerguntaAberta(props) {
    return (
      <PerguntasContainer>
        <p>{props.perguntas}</p>
        <input/>
      </PerguntasContainer>
    );
}