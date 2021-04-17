import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { green } from "@material-ui/core/colors";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Container = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: 4px solid black;
  border-radius: 15px;
  left: 500px;
  h1 {
    color: blue;
  }
  span {
    color: violet;
  }
  Button {
    border: 1px double pink;
    position: absolute;
    top: 540px;
  }
  Button:hover {
    background-color: lightblue;
    transform: scale(1.4);
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 0;
    margin-left: -480px;
  }
`;
const Header = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  > h1 {
    font-size: 40px;
    margin-bottom: 0;
  }
  > svg {
    cursor: pointer;
  }
  > svg:hover {
    transform: scale(1.5);
  }
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 10px;
  position: absolute;
  top: 130px;
`
const Li = styled.li`
  width: 15%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3px;
  padding: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 4px solid violet;
  }
  img:hover{
    transform: scale(1.5);
  }
  p {
    font-size: 12px;
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace;
    text-align: center;
    
  }
`;

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(props.matches);
  }, [props.matches]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/matches"
      )
      .then((response) => setMatches(response.data.matches))
      .catch((error) => console.log(error));
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvia/clear"
      )
      .then(() => getMatches())
      .catch((error) => console.log(error));
  };

  const seeMatches = matches.map((person) => {
    return (
      <Li>
        <img src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </Li>
    );
  });

  return (
    <Container>
      <Header>
        <AccountBoxIcon
          onClick={() => props.changePages()}
          style={{ fontSize: 40, color: green[500] }}
        />
        <h1>
          <span>labe</span>match
        </h1>
      </Header>
      <Div>{seeMatches}</Div>
      <Button
        onClick={clear}
        style={{ fontSize: 15 }}
        startIcon={<DeleteIcon />}
      >
        Limpar Lista
      </Button>
    </Container>
  );
};

export default Matches;
