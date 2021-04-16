import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory, useParams } from "react-router";
import { goToHomePage, goToAdminTripCreate } from "../routes/coordinator";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
 
  border: 1px solid black;
  > svg {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
    color: gray;
  }
  > svg:hover {
    transform: scale(1.4);
  }
  > button {
    position: absolute;
    top: 700px;
    right: 140px;
  }
  >button:hover {
    transform: scale(1.2);
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 680px;
  
  >button{
    margin-top: 10px;
  }
  >button:hover {
    transform: scale(1.2);
  }
  li {
    list-style: none;
    margin: 0px 10px 0px 0px;
    background: transparent;
    h2 {
      text-align: center;
      margin: 0;
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
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const AdminHomePage = () => {
  const [tripsList, setTripsList] = useState([]);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getTrips();
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

  const deleteTrip = (id) => {
    if(window.confirm('This action will delete this trip. Do you really want to continue?')) {
      const token = window.localStorage.getItem("token");
      console.log(deleteTrip)
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips/${id}`,
          {
            headers: {
              auth: token,
            },
          }
          )
          .then(() => getTrips())
          
          
          .catch((error) => console.log(error))
    } 
  }

  const tripsComponents =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <ListContainer>
          <li onClick={() => history.push(`/admin/trips/${trip.id}`)}> 
            <h2>{trip.name}</h2>
            <p></p>
          </li>
          <IconButton color="primary" aria-label="delete">
            <DeleteIcon onClick={() => deleteTrip(trip.id)}/>
          </IconButton>
        </ListContainer>
      );
    });

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  }; // - OK

  return (
    <div>
       <Header />
    <Div>
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
    </Div>
    <Footer />
    </div>
  );
};

export default AdminHomePage;
