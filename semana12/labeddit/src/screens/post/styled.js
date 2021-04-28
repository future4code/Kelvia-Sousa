import styled from 'styled-components';

export const PostContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border:  1px solid black;
    width: 80%;
  }
  h3, h4 {
    margin: 0;
  }
` 

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`

export const InputsContainer = styled.form`
  textarea {
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