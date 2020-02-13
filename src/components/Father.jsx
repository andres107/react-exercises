import React, {useState} from 'react';
import Child from './Child';

export function Father(){
  const [value, setValue] = useState(0);
  const questions = [
    "¿Ya hiciste la tarea?",
    "¿Limpiaste tu cuarto?",
    "¿Barriste los patios?",
    "¿Le apagaste a los frijoles?",
    "¿Ya lavaste los trates?",
    "¿Ayudaste a tu hermano?",
    "¿Serviste la comida?",
    "¿Lavaste la ropa?",
    "¿Sacaste el perro a pasear?",
    "¿Le diste de comer a las mascotas?"
  ];

  const handleChange = (event) =>{
    setValue(event.target.value);
  };

  return (<>
    <form>
    <label>Componente Padre : </label>
    <select value={value} onChange={handleChange}>
      {questions.map( (item, index) => {
         return <option value={index} key={item}>{item}</option>;
       })}
    </select><br/>
    <label>Componente Hijo : </label>
    <Child question={questions[value]}/>
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
  </>);
}

export default Father;
