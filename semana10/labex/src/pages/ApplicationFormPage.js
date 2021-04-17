import React from 'react';
import styled from 'styled-components';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import {goToTripList} from '../routes/coordinator';
import FormApp from '../components/FormApp';


const Div = styled.div`
    width: 100%;
    margin: auto;
    align-items: center;
    svg{
        position: absolute;
        top: 15px;
        left: 50px;
        cursor: pointer;
        color: gray;
    }
    svg:hover {
        transform: scale(1.4)
    }
`
const Main = styled.main`
    height: 680px;
    min-height: 430px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ApplicationFormPage = () => {
    const history = useHistory();

    return(
        <Div>
            <KeyboardBackspaceIcon onClick={() => {goToTripList(history)}} style={{ fontSize: 50   }}/>
            
            <Main>
            <FormApp/>
            </Main>
        </Div>
    );
};

export default ApplicationFormPage;