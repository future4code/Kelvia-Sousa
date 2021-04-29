import styled from 'styled-components';

export const LoginContainer = styled.div`
img{
  width: 150px;
  margin-top: 10px;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.8vw;
  span{
   color: gray;
   font-weight: bold;
   font-size: 18px;
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
      margin-bottom: 20px;
     &:hover{
      border: 0.5px solid #778a73;
     }
 }
`
export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
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
   img{
     width: 30px;
     transform: rotate(330deg);
    animation-delay: 3s;
   }

`

