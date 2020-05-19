import React, { useState } from "react";
import Girl from '../Girl';

export function BoyAndGirl(props){
  const { options } = props;
  const [value, setValue] = useState(0);


  const handleChange = (event) =>{
    setValue(event.target.value);
  };

  return (<>
    <form>
    <label>Dale una opción a tu novia para ver que quiere de comer : </label><br/>
    <select value={value} onChange={handleChange}>
      {options.map( (item, index) => {
         return <option value={index} key={item}>{item}</option>;
       })}
    </select><br/><br/><br/>
    <label>Novia : </label>
    <Girl option={options[value]}/>
    </form>
    <br/>
  </>);
}

export default BoyAndGirl;
