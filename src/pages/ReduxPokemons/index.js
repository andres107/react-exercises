import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomizedTable from "../../components/CustomizedTable"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";

export default function ReduxPokemons(props){
  const { handleClick, title, pokemons, handleRemovePokemon } = props;

  return (
    <Grid
      container
      spacing={1}
      justify="center"
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Button
          onClick={(e) => handleClick(e)}
          variant="contained"
          color="primary"
        >
          {title}
        </Button>
      </Grid>

      <Grid item>
      {pokemons.isFetching && (<b> Cargando datos...</b>)}
      {!pokemons.isFetching && pokemons.data.length > 0 && (
        <CustomizedTable
          rows={Array.from(pokemons.data, (item)=>{
            return [
              (<Link to={`/pokemon/${item.id}`}>
                 {item.name}
               </Link>),
              (<IconButton
                 aria-label="delete"
                 onClick={handleRemovePokemon}
                 value={item.name}
               >
                 <DeleteIcon />
               </IconButton>)
            ];
          })}
          heads={["Pokemon", "Acción"]}
        />
      )}
      </Grid>
    </Grid>
 );
}
