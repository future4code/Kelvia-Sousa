import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { goToAdminTripList } from "../routes/coordinator";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Div = styled.div`
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
`
const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  h3{
      margin: 0 0 5px 0;
      color: #094293;
    }
  li{
    list-style: none;
    text-align: center;
    width: 450px;
  }
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    
    p{
      text-align: center;
      margin: 0;
      word-wrap: break-word;
    }
    button{
      width: 100px;
      margin: 2px;
      
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
        <li>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Application Text:{person.applicationText}</p>
          <p>Profession: {person.profession}</p>
          <p>Country: {person.country}</p>
          <Button
        onClick={() => {decideCandidate(true, person.id)}}
        variant="contained"
        color="primary"
        style={{ fontSize: 12 }}
      >
        Approve
      </Button>
      <Button
        onClick={() => {decideCandidate(false, person.id)}}
        variant="contained"
        color="primary"
        style={{ fontSize: 12 }}
      >
        Disapprove
      </Button>
        </li>
      )
    })

    const approved = tripData.candidates &&
    tripData.approved.map((person) => { 
      return (
        <li>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Application Text: {person.applicationText}</p>
          <p>Profession{person.profession}</p>
          <p>Country: {person.country}</p>
        </li>
      )
    })

  useEffect (() => {
    
    getTripDetail(params.id);
  
  }, [params.id])

  return (
    <Div>
      
      <KeyboardBackspaceIcon
        onClick={() => goToAdminTripList(history)}
        style={{ fontSize: 50 }}
      />
      <Main>
      <li key={tripData.id}>
        <h3>{tripData.name}</h3>
        <p>{tripData.planet}</p>
        <p>{tripData.description}</p>
        <p>{tripData.durationInDays} Days</p>
        <p>Date: {tripData.date}</p>
      </li>
      <h3>Candidates</h3>
      <div>
        {candidates}
      </div>
      <h3>Approved</h3>
      <div>
      {approved}
      </div>
      </Main>
    
    </Div>
  );
};

export default TripDetailsPage;
