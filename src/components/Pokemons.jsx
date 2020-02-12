import React, { useState, useEffect } from 'react';
import { getPokemonsAxios } from '../utils/actions.js';


export function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonsAxios(10);
      setPokemons(response);
    }
    fetchData();
  }, []);

  if(pokemons.length === 0)
    return <b>Cargando Datos</b>;

  return pokemons.map( (pokemon) => {
    return (
      <div key={pokemon.name}>
      <h4>{pokemon.name}</h4>
      <br/>
      <img
        src={pokemon.sprites.front_default}
        alt="Imagen no encontrada"
      />
      <img
        src={pokemon.sprites.back_default}
        alt="Imagen no encontrada"
      />
      <br/>
      </div>
    );
  });
}

export default Pokemons;
