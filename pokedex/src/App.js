import React from 'react';
import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme';
import useRequestData from './hooks/useRequestData';
import { PokemonContext } from './dataContext/PokemonContext';

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`


const App = () => {

  const pokeList = useRequestData([], 'https://pokeapi.co/api/v2/pokemon/1')

  console.log(pokeList)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <PokemonContext.Provider value={pokeList}>
      <Router/>
      </PokemonContext.Provider>
    </ThemeProvider>
  );
}

export default App;
