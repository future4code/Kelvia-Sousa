import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    margin: 10px 10px;
`

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() =>{
        pegaPokemon(props.pokemon);
    }
    ,[props.pokemon]);

        const pegaPokemon = (pokeName) => {
            axios
            .get(`${pokeUrl}${props.pokemon}`)
            .then (response => setPokemon(response.data))
            .catch(error => console.log(error))
        };

    return(
        <Div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </Div>
    );
}
export default PokeCard;