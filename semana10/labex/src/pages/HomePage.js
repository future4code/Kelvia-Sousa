import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import {goToTripList, goToLogin} from '../routes/coordinator';
import { useHistory } from 'react-router';

const Div = styled.div`
    height: 99vh;
    display: flex;
    justify-content: center;
    margin: auto;
    
`
const H1 = styled.h1`
    width: 50%;
    height: 40vh;
    margin: 0;
    font-size: 250px;
    background: url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60') no-repeat;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #4040ff;
    @media only screen and (max-width: 768px) {
        margin-right: 80px;
        font-size: 90px;
        margin-top: 50px;;
    }
`

const ButtonContainer =styled.div`
    width: 60%;
    display:flex;
    justify-content: space-evenly;
    position: absolute;
    top: 480px;
    @media only screen and (max-width: 768px) {
        position: absolute;
        top: 350px;
        display: flex;
        flex-direction: column;
        button{
            margin-bottom: 10px;
        }
    }
`

const HomePage = () => {
    const history = useHistory();

    return(
        <ThemeProvider theme={theme}>
            <Div>
                <H1>LABEX</H1>
                <ButtonContainer>
                <Button onClick={() => goToLogin(history)} variant="contained" color='primary' style={{ fontSize: 30}}>
                    Admin area
                </Button>
                <Button onClick={() => goToTripList(history)} variant="contained" color='primary' style={{ fontSize: 30}}>
                    Travel List
                </Button>
                </ButtonContainer>
            </Div>
        </ThemeProvider>
    );
};

export default HomePage;