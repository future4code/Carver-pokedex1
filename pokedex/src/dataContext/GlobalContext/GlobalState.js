import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])

    const pokeList = useRequestData([], 'https://pokeapi.co/api/v2/pokemon/')

    const states = {pokedex, pokemonsList}
    const sets = {setPokedex, setPokemonsList}

    return <GlobalContext.Provider value={{ states, sets, pokeList}}>
        {props.children}
    </GlobalContext.Provider>
}