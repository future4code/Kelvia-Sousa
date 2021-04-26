import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.8vw;
`
export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-top: 20vh;
 input{
   border: none;
   background: none;
   border-bottom: 1px solid lightGray;
   margin: 20px 0;
   padding: 15px;
   outline: none;
   text-align: center;
   letter-spacing: 2px;
   font-size: 16px;
   font-weight: bold;
   
   &:hover{
    border-bottom: 2px solid lightGray;
   }
 }
 
 button{
     background: none;
     border: none; 
     font-weight: bold;
     letter-spacing: 3px;
     cursor: pointer;
     color: gray;
      background-color: #FBFFDE;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 2px 12px 20px 15px lightGray;
     &:hover{
      border: 0.5px solid #778a73; 
     }
   }

`