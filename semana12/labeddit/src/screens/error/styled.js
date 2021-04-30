import styled from "styled-components";

export const ErroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  img {
    margin-right: 100px;
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
    img{
      margin: 0;
    }
  }
`;
