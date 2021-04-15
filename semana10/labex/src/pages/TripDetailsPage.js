import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory, useParams } from "react-router";
import { goToAdminTripList } from "../routes/coordinator";
import axios from 'axios';
import Button from "@material-ui/core/Button";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    list-style: none;
  }
`;

const TripDetailsPage = () => {
  const history = useHistory();
  const params = useParams();
  const [tripData, setTripData] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

 
  const getTripDetail = (id) => {
    const token = window.localStorage.getItem('token')

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTripData(response.data.trip);        
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  useEffect (() => {
    
    getTripDetail(params.id);
  
  }, [params.id, getTripDetail])

  return (
    <Div>
      <Header />
      <h2>TripDetailsPage</h2>
      <Main>
      <div key={tripData.id}>
        name: {tripData.name}
        Description:{tripData.description}
        Duration(days): {tripData.durationInDays}
        Date:{tripData.date}
      </div>
      <Button
        onClick={() => {
          goToAdminTripList(history);
        }}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Back
      </Button>
      </Main>

      <Footer />
    </Div>
  );
};

export default TripDetailsPage;
