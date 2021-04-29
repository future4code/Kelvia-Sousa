import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
  }
  
  h5,h2{
    text-align: center;
    width: 90%;
  }
  h3 {
    text-transform: uppercase;
    box-shadow: 2px 12px 20px 15px lightGray;
    border-radius: 5px;
    padding-right: 20px;
  }
  img{
    width: 20px;
    height: 15px;
    cursor: pointer;
    margin: 0 10px;
  }
  
` 

export const CommentsContainer = styled.div`
background-color: #FBFFDE;  
box-shadow: 2px 12px 20px 15px lightGray;
border-radius: 5px;
margin-top: 10px;
align-items: center;
text-transform: capitalize;

`

export const InputsContainer = styled.form`
display: flex;
flex-direction: column;
  textarea {
  border: none;
   background: none;
   border-bottom: 3px solid lightGray;
   margin-bottom: 20px ;
   outline: none;
   text-align: center;
   font-size: 13px;
   font-weight: bold;
   
   &:hover{
    border-bottom: 2px solid lightGray;
   }
  }
  button{
     border: none;
     letter-spacing: 3px;
     cursor: pointer;
     color:  #FBFFDE;
      background-color:gray;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 2px 12px 20px 15px lightGray;
      
     &:hover{
      border: 0.5px solid #778a73;
     }
   }
`

export const Data = styled.div`
    font-size: 20px;
    text-transform: capitalize;
`
