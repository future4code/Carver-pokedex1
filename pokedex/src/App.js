import React from 'react';
import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme';

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
      <Router/>
    </ThemeProvider>
  );
}

export default App;
