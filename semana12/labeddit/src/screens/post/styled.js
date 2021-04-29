import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  h2 {
    text-align: center;
    width: 100%;
    margin-top: 8px;
  }
  h5 {
    text-align: center;
    margin: 0;
    overflow: auto;
    width: 100vw;
    font-weight: 500;
    font-size: 17px;
  }
`;
export const Data = styled.div`
  font-size: 20px;
  text-transform: capitalize;
  p {
    width: 30vw;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 15px;

      &:last-child {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    p {
      width: 100vw;
    }
  }
`;

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    border: none;
    background: none;
    border-bottom: 1px solid lightGray;
    margin-bottom: 20px;
    outline: none;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    width: 500px;
    &:hover {
      border-bottom: 2px solid lightGray;
      border-bottom: 3px solid lightGray;
    }
  }
  button {
    border: none;
    letter-spacing: 3px;
    cursor: pointer;
    color: #fbffde;
    background-color: gray;
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 2px 12px 20px 15px lightGray;
    width: 100px;
  }
  @media (max-width: 600px) {
    textarea {
      width: 250px;
    }
  }
`;
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fbffde;
  margin: 3px 0;
  width: 98%;

  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70px;
  }
  p {
    width: 70%;
    text-align: center;
    font-size: 16px;
  }
  img {
    width: 22px;
  }
  span {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }
`;
