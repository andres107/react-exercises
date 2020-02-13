import React from 'react';



export function TemperatureInput(props){
  const {temperature, scale, onTemperatureChange} = props;
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  return (
     <fieldset>
       <legend>Introduce la temperatura en grados {scaleNames[scale]}:</legend>
       <input
         value={temperature}
         onChange={(e) => onTemperatureChange(e.target.value)}
       />
     </fieldset>
   );
}

export default TemperatureInput;
