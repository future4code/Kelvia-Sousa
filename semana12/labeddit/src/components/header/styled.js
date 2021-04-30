import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #fbffde;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 12px 20px 15px lightGray;
  img {
    width: 20px;
  }
  button {
    font-weight: bold;
    cursor: pointer;
    border: none;
    background: none;
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
  button:hover {
    transform: scale(1.1);
  }
  span {
    margin-right: 20px;
    font-size: 14px;
  }
`;
