import React, { useContext } from "react"
import CardPokemon from "../../components/PokemonCard/CardPokemon";
import { GlobalContext } from "../../dataContext/GlobalContext/GlobalStateContext";
import { ContainerHome} from './styled'


const HomePage = () => {
    const {pokeList} = useContext(GlobalContext)

    const mappedPokemons = pokeList.results && pokeList.results.map((item, index) =>{
        return( <CardPokemon name={item.name} key={item.name} index={index}/> )
    })


 return (
     <ContainerHome>
         {mappedPokemons}
     </ContainerHome>
 )
}

export default HomePage;