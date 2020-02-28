import React from "react";
import ReduxPokemons from "../../pages/ReduxPokemons";
import { useDispatch, useSelector } from 'react-redux';
import { searchPokemons, removePokemon } from '../../services/actions/pokemons.js';


export default function PokemonsContainer(){
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons)

  const handleClick = () => {
    dispatch(searchPokemons());
  };
  const handleRemovePokemon = (e) => {
    dispatch(removePokemon(e.currentTarget.value));
  };


  return (
    <ReduxPokemons
      handleClick={handleClick}
      title="Buscar Pokemons"
      pokemons={pokemons}
      handleRemovePokemon={handleRemovePokemon}
    />
  );
}
