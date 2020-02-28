import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pokemon from "../../pages/Pokemon";
import { searchPokemon } from "../../services/actions/pokemons.js";

export  default function PokemonContainer(props){
  const { match: { params: { id } } } = props;
  const  pokemon = useSelector( state => {
    return state.pokemons.selected;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const action = () => {
      dispatch(searchPokemon(id));
    }
    action();
  }, []);

  if(!pokemon || pokemon.isFetching){
    return (<b> Buscando pokemon...</b>);
  }

  return (
    <Pokemon pokemon={pokemon} />
  );
}
