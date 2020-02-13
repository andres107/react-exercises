import  React from 'react';
import _ from 'lodash';

export function Child(props){
  const answers = [
    "Pues no.",
    "Ash ash",
    "¡Ya voy no saques la chancla!",
    "Hoy no tengo ganas",
    "Puffff",
    "¡Soy el esclavo de esta casa!",
    "¡Nunca me entiendes!",
    "Perdón se me olvidó",
    "Mmmmm bueno ya ahorita lo hago",
    "Si ya lo hice yeiii",
  ];
  const { question } = props;

  return (<>
    ¿En serio me estas preguntado?, {question}<br/>
     {_.sample(answers)}

    </>);
}

export default Child;

