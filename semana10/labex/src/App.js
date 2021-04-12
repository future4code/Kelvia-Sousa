import React from 'react';
import styled from 'styled-components';
import {theme} from './Theme';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListTripsPage from './pages/ListTripsPage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <HomePage/>
      
    </ThemeProvider>
  );
}

export default App;
