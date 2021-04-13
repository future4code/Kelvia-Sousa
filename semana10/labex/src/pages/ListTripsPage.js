import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import useRequestData from '../hooks/useRequestData';
import {goToHomePage, goToTripApplication} from '../routes/coordinator';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
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
    li{
        list-style: none;
    }
`

const ListTripsPage = () => {
    const history = useHistory();
    const list = useRequestData('trips', []);

    console.log(list)
    return(
        <Div>
            <Header/>
            <KeyboardBackspaceIcon onClick={() => goToHomePage(history)} style={{ fontSize: 50}}/>
            <h2>Trips List</h2>
            <Main>
            <Button onClick={() => goToTripApplication(history)} variant="contained" color='primary' style={{ fontSize: 15}}>Sing Up For A Trip</Button>
            </Main>
            <Footer/>
        </Div>
    );
};

export default ListTripsPage;