import styled from 'styled-components';

export const PostCards = styled.div`
background-color: #FBFFDE;  
box-shadow: 2px 12px 20px 15px lightGray;
border-radius: 5px;
img{
  width: 25px;
}
  p{
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18vw;
  height: 25vh;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    p, h4{
      color: gray;
    }
  }
  h4{
    text-align: center;
  }
  >div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    border-top: 1px solid gray;
    border-radius: 5px;
    span{
      margin: 0 5px;
    }
  }

`

export const Text = styled.div`
  overflow: hidden;
  width: 10px;
  border: 1px solid gray;
` 