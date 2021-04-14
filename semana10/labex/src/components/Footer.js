import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background: url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60') no-repeat; 
    background-position: bottom;
    width: 100%;
    min-height: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    top: 610px;
`

const Footer = () => {
    return(
        <Div>
            <p></p>
        </Div>
    );
};

export default Footer;