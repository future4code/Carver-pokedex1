import React from "react"
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { ContainerImg, ContainerMoves, ContainerStats, ContainerTypes } from "./styled";

const DetailsPage = () => {

    const params = useParams()

    const poke = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${params.name}`)

    console.log('aaa', poke)


    return (
        <div>
            <h1>Detalhes do pokemon: {poke.name && poke.name.toUpperCase()}</h1>

            <ContainerImg>
            <img src={poke.sprites && poke.sprites.front_default} />
            <img src={poke.sprites && poke.sprites.back_default} />
            </ContainerImg>

            <ContainerTypes>
            <h3>Types</h3>
            {poke.types && poke.types.length > 0 ?
                <div>
                    <p> {poke.types && poke.types[0].type.name} </p>
                    <p> {poke.types[1] && poke.types[1].type.name} </p>
                </div>
                :
                <p> {poke.types && poke.types[0].type.name} </p>
            }
            </ContainerTypes>

            <ContainerStats>
            <h3>Stats:</h3>
            <p>HP: {poke.stats && poke.stats[0].base_stat}</p>
            <p>Attack: {poke.stats && poke.stats[1].base_stat}</p>
            <p>Defense: {poke.stats && poke.stats[2].base_stat}</p>
            <p>Special Attack: {poke.stats && poke.stats[3].base_stat}</p>
            <p>Special Defense: {poke.stats && poke.stats[4].base_stat}</p>
            <p>Speed: {poke.stats && poke.stats[5].base_stat}</p>
            </ContainerStats>

            <ContainerMoves>
            <h3>Moves:</h3>
            <li>{poke.moves && poke.moves[0].move.name}</li>
            <li>{poke.moves && poke.moves[1].move.name}</li>
            <li>{poke.moves && poke.moves[2].move.name}</li>
            <li>{poke.moves && poke.moves[3].move.name}</li>
            </ContainerMoves>
        </div>
    )
}

export default DetailsPage;