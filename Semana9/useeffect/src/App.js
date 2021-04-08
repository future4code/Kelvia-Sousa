import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokeCard from './components/PokeCard'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 600px;
  width: 200px;
  height: 70vh;
  border: 3px solid gray;
  border-radius: 10px;
  span{
    color: white;
    background-color: black;
    margin-left: 30%;
  }
  select{
    margin: 25px;
    width: 150px;
    font-size: 18px;
  }
` 

function App() {
  const [pokeList, setpokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');

  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then ((response) => {
      setpokeList(response.data.results)
    })
    .catch((error)=> {console.log(error)
    });
  });

  const changePokeName = (event) => {
    setPokeName (event.target.value)
  };

  const renderPokeName = () => {
    return pokeList.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.name}>
          {pokemon.name}
          </option>
      );
    });
  };

  return (
    <Div>
      <h3><span>Poke</span>List</h3>
      <select onChange={changePokeName}>

      <option value={""}>Nenhum</option>
      {renderPokeName()}

      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Div>
  );
};

export default App;
