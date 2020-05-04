import  React, { Component } from 'react';
import { useChuckNorris } from '@jsjoeio/react-use-chuck-norris';

const gnumber = Math.floor(Math.random()*10 +1);

function guessNumber(prevProps, nextProps){
  const { number } = nextProps;

  if(gnumber === parseInt(number) )
    return false;

  return true;
}

function Jokes(props){
  const { data, loading, error} = useChuckNorris();
  const { number } = props;

  if(number === 0)
    return <b>Tú nunca adivinaras mi número</b>;

  if (loading) return <p>Pensando...</p>;
  if (error) return <p>¡Oh no!, se me olvidó el chiste: {error}</p>;

  return (<b>
     ¡¡¡Puff si adivinaste!!!, mi numero es {gnumber}.<br/>
     Aquí está tu chiste, pero en inglés >:| <br/>
     {data}
    </b>);
}

export default React.memo(Jokes, guessNumber);

