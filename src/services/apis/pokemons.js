const axios = require('axios').default;
/*
 * Funcion que hace peticiones para obtener un total
 * de numberOfPokemons
 * */
export function getPokemons() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
}

export default getPokemons;
