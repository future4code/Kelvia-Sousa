import styled from 'styled-components';

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 50vh;
  align-items: center;
  margin-top: 70px;
  background-color: #FBFFDE;
  box-shadow: 2px 12px 20px 15px lightGray;
  margin-bottom: 15vh;
  border-radius: 6px;
  
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
 textarea{
   width: 40vw;
  border: none;
   background: none;
   outline: none;
   margin-top: 40px;
   text-align: center;
   font-size: 16px;
   font-weight: bold;
   border-bottom: 1px solid lightGray;
 }
 span{
   color: gray;
   font-weight: bold;
 }
 button{
     background: none;
     border: none;
     font-weight: bold;
     letter-spacing: 3px;
     cursor: pointer;
     position: absolute;
     margin-top: 400px;
     color: #FBFFDE;
      background-color: gray;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 2px 12px 20px 15px lightGray;
      margin-bottom: 15vh;
     &:hover{
      border: 0.5px solid #778a73;
     }
   }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`