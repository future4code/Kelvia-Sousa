import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import {goToHomePage, goToAdminTripCreate, goToAdminTripDetail} from '../routes/coordinator';

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
        margin-bottom: 30px;
    }
    li:hover {
        transform: scale(1.2);
        
        cursor: pointer; 
        background-color: #fff;
    }
`
const AdminHomePage = () => {
    const history = useHistory();

    return(
        <Div>
            <Header/>
            <KeyboardBackspaceIcon onClick={() => {goToHomePage(history)}} style={{ fontSize: 50   }}/>
            <h2>AdminHomePage</h2>
            <Main>
            <li onClick={() => {goToAdminTripDetail(history)}} variant="contained" color='primary' style={{ fontSize: 15}}> Clickable list for details </li>
            <Button onClick={() => {goToAdminTripCreate(history)}} variant="contained" color='primary' style={{ fontSize: 15}}>Create News Trips</Button>
            </Main>
            <Footer/>
        </Div>
    );
};

export default AdminHomePage;