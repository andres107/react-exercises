import React from "react";
import withGetData from "../../hoc/withGetData";

export function ListPokemon(props){
  const { data } = props
  return data.data.results.map( (pokemon) => {
    return (
      <div key={pokemon.name}>
      <h4>{pokemon.name}</h4>
      <br/>
      </div>
    );
  });
}

export default withGetData("https://pokeapi.co/api/v2/pokemon")(ListPokemon);
