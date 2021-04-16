import React from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import Router from './routes/Router';




function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Router/>
     
    </ThemeProvider>
  ); 
}

export default App;
