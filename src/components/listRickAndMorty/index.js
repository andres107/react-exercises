import React from "react";
import withGetData from "../../hoc/withGetData";

export function ListRickAndMorty(props){
  const { data } = props;
  return data.data.results.map( (item) => {
    return (
      <div key={item.name}>
      <h4>{item.name}</h4>
      <br/>
      <img
        src={item.image}
        alt="Imagen no encontrada"
      />
      <br/>
      </div>
    );
  });
}

export default withGetData("https://rickandmortyapi.com/api/character")(ListRickAndMorty);
