import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {goToAdminTripList, goToHomePage} from '../routes/coordinator';
import { useHistory } from 'react-router';

const Div = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg{
        position: absolute;
        top: 15px;
        left: 50px;
        cursor: pointer;
    }
    svg:hover {
        transform: scale(1.4)
    }
`
const Main = styled.main`
    min-height: 430px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        border: 1px solid black; // TIRAR DEPOIS
    }
    p:hover {
        cursor: pointer;
        transform: scale(1.4) // TIRAR DEPOIS
    }
`

const LoginPage = () => {
    const history = useHistory();

    return(
        <Div>
            <Header/>
            <KeyboardBackspaceIcon onClick={()=>{goToHomePage(history)}} style={{ fontSize: 50   }}/>
            <h2>LoginPage</h2>
            <Main>
                <p onClick={()=>{goToAdminTripList(history)}}>Login - Clickable for testing</p>
            </Main>
            <Footer/>
        </Div>
    );
};

export default LoginPage;