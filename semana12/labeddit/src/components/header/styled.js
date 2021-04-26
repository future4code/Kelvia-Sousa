import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #FBFFDE;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 12px 20px 15px lightGray;
  button {
    font-weight: bold;
    cursor: pointer;
    border: none;
    background: none;
    margin: 0 15px;
  }
  button:hover {
    transform: scale(1.1);
  }
  span{
    margin-right: 20px;
  }
` 
