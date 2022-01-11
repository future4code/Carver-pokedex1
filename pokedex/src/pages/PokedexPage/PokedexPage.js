import { Typography } from "@material-ui/core";
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
            <Typography variant={'h4'}>Sua Pokedex</Typography>
            <ContainerPokemons>
            {mappedPokedex.length === 0 ? 
            <Typography variant={'h3'}> Nenhum pokemon na pokedex :( </Typography> 
            :
            mappedPokedex}
            </ContainerPokemons>
        </ContainerPagePokedex>
    )
}

export default PokedexPage;