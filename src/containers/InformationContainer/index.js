import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../../pages/Pokemon";

export default function InformationContainer(props){
  const pokemon = useSelector( state => {
    return state.pokemons.selected;
  });

  const { history: { location: { others: {
    name,
    firstLastName,
    secondLastName
  } } } }= props;



  return (
   <b>
     Hola {`${name} ${firstLastName} ${secondLastName}`}, tu eres: <br/>
     <Pokemon pokemon={pokemon} />
   </b>
  );


}
