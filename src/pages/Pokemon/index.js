import React from "react";

export default function Pokemon(props){
  const {pokemon} = props;

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
}
