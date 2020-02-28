import * as types from "../constants/pokemons.js";
import { getPokemons, getPokemon } from "../apis/pokemons.js";

export function searchPokemons(){
   const request = getPokemons();
   return { type: types.POKEMONS_FETCH, payload: request };
}

export function removePokemon(pokemonName){
  return {type: types.POKEMON_REMOVE, meta: pokemonName};
}

export function editPokemon(pokemonName){
  return { type: types.POKEMON_EDIT, meta: pokemonName };
}

export function searchPokemon(pokemonId){
  const request = getPokemon(pokemonId);
  return { type: types.POKEMON_FETCH, payload: request };
}

export default searchPokemons;
