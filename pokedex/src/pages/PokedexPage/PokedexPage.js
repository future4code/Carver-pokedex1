import React, { useContext } from "react"
import CardPokemon from "../../components/PokemonCard/CardPokemon";
import { GlobalContext } from "../../dataContext/GlobalContext/GlobalStateContext";
import { ContainerPagePokedex, ContainerPokemons } from "./styled";

const PokedexPage = () => {
    const {pokedex, setPokedex} = useContext(GlobalContext)

    const mappedPokedex = pokedex && pokedex.map((item) => {
        return <CardPokemon name={item.name} key={item.name}/>
    })


    return (
        <ContainerPagePokedex>
            <h1>PokedexPage</h1>
            <ContainerPokemons>
            {mappedPokedex}
            </ContainerPokemons>
        </ContainerPagePokedex>
    )
}

export default PokedexPage;