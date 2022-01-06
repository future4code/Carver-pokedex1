import { Button, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { goToDetailPage } from "../../router/coordinator"
import { CardContainer, DivButton } from "./styles"

const CardPokemon = (props) => {

    const poke = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${props.name}`)

    const history = useHistory()

    console.log(poke)

    return (
        <CardContainer>
            <img src={poke.sprites && poke.sprites.front_default}/>
            <Typography>{poke.name}</Typography>
            <DivButton>
            <Button size={'small'}  color={'primary'} variant="outlined">Add Pokedex</Button>
            <Button size={'small'} color={'primary'} variant="outlined" onClick={() => goToDetailPage(history, props.name)}>Detalhes</Button>
            </DivButton>
        </CardContainer>
    )
    
}

export default CardPokemon;