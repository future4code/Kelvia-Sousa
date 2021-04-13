import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import {goToTripList} from '../routes/coordinator';

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
    li{
        list-style: none;
    }
`

const ApplicationFormPage = () => {
    const history = useHistory();

    return(
        <Div>
            <Header/>
            <KeyboardBackspaceIcon onClick={() => {goToTripList(history)}} style={{ fontSize: 50   }}/>
            <h2>ApplicationFormPage</h2>
            <Main>
                
            </Main>
            <Footer/>
        </Div>
    );
};

export default ApplicationFormPage;