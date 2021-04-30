import styled from "styled-components";

export const PostCards = styled.div`
  background-color: #fbffde;
  box-shadow: 2px 12px 20px 15px lightGray;
  border-radius: 5px;
  h3 {
    margin: 0;
    display: flex;
    align-items: center;
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
    p,
    h3 {
      color: gray;
    }
  }
  h4 {
    text-align: center;
    color: #8b0000;
    margin: 8px 0;
    max-width:95%;
  }
  p{
    font-size:0.875rem;
    margin-top: 0.5rem;
    max-width:80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 3px 0;
  }
  > div {
    width: 95%;
    height: 10px;
    display: flex;
    justify-content: space-between;
    span {
      margin-top: 25px;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 35vh;
  }
`;
