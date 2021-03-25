import React from 'react'
import styled from 'styled-components'
import AllCapsules from './pages/AllCapsules'


const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export default class App extends React.Component{
    render() {
    return(
      <Body>
       <AllCapsules/>
      </Body>
    )
  }
 }