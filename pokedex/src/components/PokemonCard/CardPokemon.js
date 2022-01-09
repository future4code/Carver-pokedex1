import { Button, Typography } from "@material-ui/core"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../dataContext/GlobalContext/GlobalStateContext"
import useRequestData from "../../hooks/useRequestData"
import { goToDetailPage } from "../../router/coordinator"
import { CardContainer, DivButton } from "./styles"

const CardPokemon = (props) => {

    const { pokedex, setPokedex, pokeList } = useContext(GlobalContext)
    const poke = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${props.name}`)
    const history = useHistory()
    console.log(poke)


    const addPokedex = (pokemon, index) => {
        const newPokemon = { ...pokemon }
        const newPokedex = [...pokedex, newPokemon]
        setPokedex(newPokedex)
        if (pokemon === poke) {
            pokeList.results.splice(index, 1)
        }
    }

    const removePokemon = (pokemon) => {
        const newPokemon = { ...pokemon }
        pokeList.results = [newPokemon, ...pokeList.results]
        const newPokeList = pokedex.filter((item) => {
            return pokemon.id !== item.id;
        })
        setPokedex(newPokeList)
    }


    return (
        <CardContainer>
            <img src={poke.sprites && poke.sprites.front_default} />
            <Typography>{poke.name && poke.name.toUpperCase()}</Typography>
            <DivButton>
                {history.location.pathname === '/pokedex' ?
                    <Button size={'small'} color={'text'} variant="outlined" onClick={() => removePokemon(poke)}>Remove</Button>
                    :
                    <Button size={'small'} color={'text'} variant="outlined" onClick={() => addPokedex(poke, props.index)}>Adicionar</Button>
                }
                <Button size={'small'} color={'text'} variant="outlined" onClick={() => goToDetailPage(history, props.name)}>Detalhes</Button>
            </DivButton>
        </CardContainer>
    )

}

export default CardPokemon;