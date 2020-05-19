import React, {useState} from 'react';
import Jokes from '../../components/Jokes';

export default function GuessMyNumber(){
  const [value, setValue] = useState(0);
  const [chances, setChances] = useState(0);
  const options = [1,2,3,4,5,6,7,8,9,10];


  const handleChange = (event) => {
    setValue(event.target.value);
    setChances(chances + 1);
  };

  if( chances >= 5 ){
    return <b>Falleste amiguito, suerte la proxima</b>;
  }

  return (<>
    <form>
    <label>
      Hola, estoy pensando en un número del 1 al 10,
      tienes cinco oportunidades, si adivinas te dire un chiste
      de Mr. Chuck Norris:
    </label><br/>
    <select value={value} onChange={handleChange}>
      {options.map( (item, index) => {
         return <option value={item} key={item}>{item}</option>;
       })}
    </select><br/><br/><br/>
    <label> Oportunidades usadas: {chances} </label><br/><br/>
    <label><Jokes number={value}/></label>
    </form>
    <br/>
  </>);
}

