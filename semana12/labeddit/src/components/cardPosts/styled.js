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
  p {
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22vw;
  height: 31vh;
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
