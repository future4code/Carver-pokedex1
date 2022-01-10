import React from 'react';
import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme';
import useRequestData from './hooks/useRequestData';
import { GlobalState } from './dataContext/GlobalContext/GlobalState';

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <GlobalState>
      <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
