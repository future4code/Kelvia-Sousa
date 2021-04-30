import styled from "styled-components";

export const FeedContainer = styled.div`
  margin-top: 30px;
  > img {
    cursor: pointer;
    width: 70px;
    padding: 10px;
    position: fixed;
    margin: 70vh 0px 0px 10px;
    box-shadow: 2px 12px 20px 15px lightGray;
    border-radius: 50px;
    border: 1px solid lightblue;
  }
  @media (max-width: 600px) {
    > img {
      width: 50px;
      margin: 70vh 0px 0px 20px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
