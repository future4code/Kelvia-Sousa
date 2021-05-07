import styled from "styled-components";

export const PostCards = styled.div`
  background-color: #fbffde;
  box-shadow: 2px 12px 20px 15px lightGray;
  border-radius: 5px;
  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    max-width:80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    width: 35px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22vw;
  height: 33vh;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    p{
      color: gray;
    }
  }
  h4 {
    text-align: center;
    color: #8b0000;
    margin: 5px 0;
    max-width:95%;
    overflow: hidden;
  }
  h6{
    margin: 0;
    font-size: 10px;
    letter-spacing: 1px;
  }
  p{
    font-size:0.875rem;
    margin-top: 0.5rem;
    max-width:80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;

   &:first-child{
    
    }
  }
  > div {
    width: 95%;
    height: 10px;
    display: flex;
    justify-content: space-between;
    span {
      margin-top: 10px;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 35vh;
  }
`;
