import styled from 'styled-components';

export const FeedContainer = styled.div`
   button{
     background: none;
     border: none;
     font-weight: bold;
     letter-spacing: 3px;
     cursor: pointer;
     background-color: #FBFFDE;
     color: gray ;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 2px 12px 20px 15px lightGray;
      margin: 5vh 0;
      margin-left: 43vw;
     &:hover{
      border: 0.4px solid #778a73;
     }
` 

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`