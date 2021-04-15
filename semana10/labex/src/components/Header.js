import React from 'react';
import styled from 'styled-components';
import {goToHomePage} from '../routes/coordinator';
import { useHistory } from 'react-router';

const Div = styled.div`
    background: url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60') no-repeat; 
    background-position: center;
    box-shadow: 0 0 5px 2px ;
    width: 100%;
    min-height: 80px;
    margin: auto;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        background: url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60') no-repeat;
        background-position: center;
    }
`

const H1 = styled.h1`
    margin: 0;
    font-size: 60px;
    background: url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60');
    background-position: right;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 10px; 
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: black;
    cursor: pointer;
    transform: scale(1.9);
    
    @media only screen and (max-width: 768px) {
        font-size: 40px;
        letter-spacing: 30px;
        -webkit-text-stroke-width: 0;
    }
`

const Header = () => {
    const history =  useHistory();
    return(
        <Div>
            <H1 onClick={()=>{goToHomePage(history)}}>LABEX</H1>
        </Div>
    );
};

export default Header;