import styled from 'styled-components';

export const PostCards = styled.div`
background-color: #FBFFDE;  
box-shadow: 2px 12px 20px 15px lightGray;
border-radius: 5px;
h3{
  margin-top: 0;
}
img{
  width: 35px;
}
  p{
      font-weight: bold;
      text-transform: capitalize;
      margin: 0;
    }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vh;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    p, h3, h4{
      color: gray;
    }
  }
  h4{
    text-align: center;
  }
  >div{
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightGray;
  }

`