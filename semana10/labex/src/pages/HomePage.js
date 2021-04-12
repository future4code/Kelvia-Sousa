import React from 'react';
import styled from 'styled-components';
import {theme} from '../Theme';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Div = styled.div`
    /*border: 5px solid black;
    border-radius: 50px;
    border-color: #ffa500; */
    width: 98%;
    height: 98vh;
    margin: auto;
    display: flex;
    justify-content: center;
    h1{
        position: absolute;
        top: 30px;
    }
`
const H1 = styled.h1`
    /* border: 5px solid black; */
    margin: 0;
    font-size: 250px;
    background: url('https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 30px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #cc8400;
`

const ButtonContainer =styled.div`
    /* border: 1px solid black; */
    width: 80%;
    display:flex;
    justify-content: space-evenly;
    position: absolute;
    top: 480px;
`

const HomePage = () => {
    return(
        <ThemeProvider theme={theme}>
            <Div>
                <H1>LABEX</H1>
                <ButtonContainer>
                <Button variant="contained" color='primary' style={{ fontSize: 30}}>
                    Administrator
                </Button>
                <Button variant="contained" color='primary' style={{ fontSize: 30}}>
                    Travel List
                </Button>
                </ButtonContainer>
            </Div>
        </ThemeProvider>
    );
};

export default HomePage;