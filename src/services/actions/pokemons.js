import * as types from "../constants/pokemons.js";
import getPokemons from "../apis/pokemons.js";

export function searchPokemons(){
   const request = getPokemons();
   return { type: types.POKEMONS_FETCH, payload: request };
}

export function removePokemon(pokemonName){
  return {type: types.POKEMON_REMOVE, meta: pokemonName};
}

export default searchPokemons;
