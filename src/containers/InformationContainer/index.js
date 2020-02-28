import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../../pages/Pokemon";
import { Link } from "react-router-dom";

export default function InformationContainer(props){
  const pokemon = useSelector( state => {
    return state.pokemons.selected;
  });
  if(!pokemon || props.history ){
    return <Link to="/redux-form">Ir al formulario</Link>
  }

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
