import React from "react";
/* import axios from "axios"; */
import styled from "styled-components";

const ListContainer = styled.div`
    margin: 0;
`

const FullList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vh;
`

export default class List extends React.Component {
    render() {
      return(
        <ListContainer>
        <FullList>
          
        </FullList>
        </ListContainer>
      )
    }
  }