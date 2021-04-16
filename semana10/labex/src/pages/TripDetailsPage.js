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
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 40%;
    h2{
      text-align: center;
      margin: 0;
    }
    p{
      text-align: center;
      margin: 0;
      
    }
  }
  
`


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
        console.log(response.data)     
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  const decideCandidate = (approve, candidateId) => {

    const token = window.localStorage.getItem('token')

    const body = {
      approve: approve
    }

    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips/${tripData.id}/candidates/${candidateId}/decide`, body ,
      {
        headers:{
          auth: token
        }
      }
      )
      .then(() => {
        alert('success!')
        getTripDetail() 
      })
      .catch((error) => alert(error))
  }

  const candidates = tripData.candidates &&
    tripData.candidates.map((person) => { 
      return (
        <div>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.applicationText}</p>
          <p>{person.profession}</p>
          <p>{person.country}</p>
          <p>{person.trip}</p>
          <Button
        onClick={() => {decideCandidate(true, person.id)}}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Approve
      </Button>
      <Button
        onClick={() => {decideCandidate(false, person.id)}}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Disapprove
      </Button>
        </div>
      )
    })

    const approved = tripData.candidates &&
    tripData.approved.map((person) => { 
      return (
        <div>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.applicationText}</p>
          <p>{person.profession}</p>
          <p>{person.country}</p>
          <p>{person.trip}</p>
        </div>
      )
    })

  useEffect (() => {
    
    getTripDetail(params.id);
  
  }, [params.id])

  return (
    <Div>
      <Header />
      
      <Main>
      <h3>Trip Detail</h3>
      <li key={tripData.id}>
        <h3>{tripData.name}</h3>
        <p><span>Description:</span> {tripData.description}</p>
        <p><span>Duration(days):</span>  {tripData.durationInDays}</p>
        <p><span>Date:</span> {tripData.date}</p>
      </li>
      <h3>Candidates</h3>
      <div>
        {candidates}
      </div>
      <h3>Approved</h3>
      <div>
      {approved}
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
