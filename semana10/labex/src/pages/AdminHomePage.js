import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router";
import { goToHomePage, goToAdminTripCreate } from "../routes/coordinator";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
  }
  > svg:hover {
    transform: scale(1.4);
  }
  > button {
    position: absolute;
    top: 560px;
  }
`;
const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 450px;
  margin-top: 40px;
  li {
    list-style: none;
    margin: 0px 80px 0px 40px;
    background: transparent;
    h2 {
      text-align: center;
      margin: 10px;
      color: #094293;
    }
  }
  p {
    margin: 0;
    word-wrap: break-word;
  }

  li:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #094293;
  border-radius: 10px;
  margin: 5px;
  button {
    margin-right: 50px;
  }
`;

const AdminHomePage = () => {
  const [tripsList, setTripsList] = useState([]);
  const history = useHistory();
  const [tripData, setTripData] = useState({});

  useEffect(() => {
    getTrips();
    getTripDetail();
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips"
      )
      .then((response) => setTripsList(response.data))
      .catch((error) => console.log(error));
  };

  const getTripDetail = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trip/${id}`,
        {
          headers: {
            auth: "token",
          },
        }
      )
      .then((response) => {
        setTripData(response.data.tripData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tripDetail =
    tripData.trips &&
    tripData.trips.map((trip) => {
      return (
        <div key={trip.id}>
          name: {trip.name}
          Description:{trip.description}
          Duration(days): {trip.durationInDays}
          Date:{trip.date}
        </div>
      );
    });
  console.log(tripDetail);

  const tripsComponents =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <ListContainer>
          <li onClick={tripDetail}>
            <h2>{trip.name}</h2>
            <p></p>
          </li>
          <IconButton color="primary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListContainer>
      );
    });

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Div>
      <Header />
      <KeyboardBackspaceIcon
        onClick={() => {
          goToHomePage(history);
        }}
        style={{ fontSize: 50 }}
      />
      <Main>
        {tripsComponents}
        <Button
          onClick={() => {
            goToAdminTripCreate(history);
          }}
          variant="contained"
          color="primary"
          style={{ fontSize: 15 }}
        >
          Create News Trips
        </Button>
      </Main>
      <Button
        onClick={logout}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Logout
      </Button>
      <Footer />
    </Div>
  );
};

export default AdminHomePage;
