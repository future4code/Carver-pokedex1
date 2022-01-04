import React, { useContext } from "react"
import { PokemonContext } from "../../dataContext/PokemonContext";

const HomePage = () => {
    const pokemons = useContext(PokemonContext)

    const mappedPokemons = pokemons.results && pokemons.results.map((item) =>{
        return <h1>{item.name}</h1>
    })


 return (
     <div>
         <h1>Home Page</h1>
         <p>{pokemons.name}</p>
         {/* <img src={pokemons.sprites.front_default}/> */}
         {mappedPokemons}
     </div>
 )
}

export default HomePage;