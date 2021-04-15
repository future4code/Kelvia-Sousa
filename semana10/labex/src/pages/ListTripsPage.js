import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";
import { goToHomePage, goToTripApplication } from "../routes/coordinator";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router";
import axios from "axios";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
    color: gray;
  }
  svg:hover {
    transform: scale(1.4);
  }
  button {
    margin-top: 30px;
  }
`;
const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 10px;
  height: 400px;
  margin-right: 800px;
  li {
    list-style: none;
    margin: 50px 20px 5px 20px;
    h2 {
      text-align: center;
      margin: 0;
      color: #094293;
    }
    p {
      margin: 0;
      word-wrap: break-word;
      span {
        font-weight: bold;
      }
    }
  }
`;

const ListTripsPage = (props) => {
  const [tripsList, setTripsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips(props.trips);
  }, [props.trips]);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips"
      )
      .then((response) => setTripsList(response.data))
      .catch((error) => console.log(error));
  };

  const tripsComponents =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <div>
          <li>
            <h2>{trip.name}</h2>
            <p>
              <span>Description: </span>
              {trip.description}
            </p>
            <p>
              <span>Planet: </span>
              {trip.planet}
            </p>
            <p>
              <span>Duration(days): </span>
              {trip.durationInDays}
            </p>
            <p>
              <span>Date: </span>
              {trip.date}
            </p>
          </li>
        </div>
      );
    });

  return (
    <Div>
      <Header />
      <KeyboardBackspaceIcon
        onClick={() => goToHomePage(history)}
        style={{ fontSize: 50 }}
      />
      <Main>{tripsComponents}</Main>
      <Button
        onClick={() => goToTripApplication(history)}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Sing Up For A Trip
      </Button>
      <Footer />
    </Div>
  );
};

export default ListTripsPage;