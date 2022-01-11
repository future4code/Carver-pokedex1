import { Typography } from "@material-ui/core";
import React, { useContext } from "react"
import CardPokemon from "../../components/PokemonCard/CardPokemon";
import { GlobalContext } from "../../dataContext/GlobalContext/GlobalStateContext";
import { ContainerHome, ContainerPageHome} from './styled'


const HomePage = () => {
    const {pokeList, pagination, setPagination} = useContext(GlobalContext)

    const changePagination = (event, value) => {
        setPagination(value)
    }

    const mappedPokemons = pokeList.results && pokeList.results.map((item, index) =>{
        return( <CardPokemon name={item.name} key={item.name} index={index}/> )
    })


 return (
     <ContainerPageHome>
         <Typography variant={'h4'}>Lista de Pokemons</Typography>
     <ContainerHome>
         {mappedPokemons}
     </ContainerHome>
     </ContainerPageHome>
 )
}

export default HomePage;