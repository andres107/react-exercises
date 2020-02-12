const axios = require('axios').default;

/*
 * Funcion que da formato para mostrar un pokemon
 * - Es una funcion pura
 * */
export function formatPokemon(pokemon){
  return (
    "<h4>" + pokemon.name + "</h4><br><img src=\"" +
    pokemon.sprites.front_default +
    "\"  alt=\"Imagen no encontrada\"/><img src=\"" +
    pokemon.sprites.back_default +
    "\"  alt=\"Imagen no encontrada\"/><br>"
  );
}

/*
 * Funcion que hace peticiones para obtener un total
 * de numberOfPokemons
 * */
export async function getPokemonsAxios(numberOfPokemons) {
  var pokemons = [];
  const url = "https://pokeapi.co/api/v2/pokemon/";
  for(var i = 1; i <= numberOfPokemons; i++) {
    pokemons.push(
      await axios.get(url + i ).then((response) => {
        return response.data;
      }).catch((error)=>{
        return error;
      })
    );
  }

  return pokemons;
}


/*
 * Funcion que hace peticiones para obtener un total
 * de numberOfPokemons y si parcial es verdadero usa Promise.race()
 * en caso contrario usa Promise.all()
 * */
export function getPokemons(numberOfPokemons, parcial = false) {
  var pokemons = null;
  var promises = [];
  const url = "https://pokeapi.co/api/v2/pokemon/";
  for(let i = 1; i <= numberOfPokemons; i++) {
    promises.push(new Promise((resolve, reject) => {
      axios.get(url + i ).then((response) => {
        resolve(response.data);
      }).catch((error)=>{
        reject(error);
      });
    }));
  }

  pokemons = (
    parcial? Promise.race(promises) : Promise.all(promises)
  );

  return pokemons;
}

export default getPokemons;
