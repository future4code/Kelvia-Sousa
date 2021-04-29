import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  /* border: 1px solid black; */
  h2{
    text-align: center;
    width: 90%;
    margin-top: 8px;
  }
  h5{
    text-align: center;
    margin: 0;
    overflow: auto;
    width: 90vw;
    font-weight: 500;
    font-size: 17px;
  }
  
` 
export const Data = styled.div`
    font-size: 20px;
    text-transform: capitalize;
    p{
      width: 30vw;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span{
        font-size: 15px;
        
        &:last-child{
          img{
           width: 15px;
           height: 15px;
           cursor: pointer;
           margin: 0 7px;
          }
        }
      }
    }
`

export const InputsContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
  textarea {
  border: none;
   background: none;
   border-bottom: 1px solid lightGray;
   margin-bottom: 20px ;
   outline: none;
   text-align: center;
   font-size: 13px;
   font-weight: bold;
   width: 500px;
   &:hover{
    border-bottom: 2px solid lightGray;
    border-bottom: 3px solid lightGray;
   }
  }
  button{
     border: none;
     letter-spacing: 3px;
     cursor: pointer;
     color:  #FBFFDE;
      background-color:gray;
      padding: 6px 0;
      border-radius: 4px;
      box-shadow: 2px 12px 20px 15px lightGray;
      width: 100px;
   }
`
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FBFFDE;  
  margin: 10px 0;
  width: 98%;
  p{
    width: 75%;
    overflow: auto;
    text-align: center;
    height: 50px;
    font-size: 18px;
  }
  img{
    width:22px;
  }
  span{
        img{
          width:15px;
          height: 15px;
          cursor: pointer;
          margin: 0 7px;
        }
  }
`

