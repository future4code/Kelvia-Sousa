import React from 'react';
import styled from 'styled-components';
import {theme} from '../Theme';
import { ThemeProvider } from '@material-ui/styles';

const Div = styled.div`
    border: 1px solid black;
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: center;
    img{
        position: absolute;
        top: 100px;
    }
`

const HomePage = () => {
    return(
        <div>
            <Div>
                <img alt='Logo' src=''/>
                <div>
                    
                </div>
            </Div>
        </div>
    );
};

export default HomePage;