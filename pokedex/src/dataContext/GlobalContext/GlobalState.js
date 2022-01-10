import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";

export const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const pokeList = useRequestData([], 'https://pokeapi.co/api/v2/pokemon/')


    return <GlobalContext.Provider value={{ pokedex, setPokedex, pokeList}}>
        {props.children}
    </GlobalContext.Provider>
}