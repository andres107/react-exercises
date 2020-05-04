import React from 'react';
import ListPokemon from '../../components/listPokemon';
import ListRickAndMorty from '../../components/listRickAndMorty';
import Grid from '@material-ui/core/Grid';

export default function Hoc(){

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={5}>
        <ListPokemon />
      </Grid>
      <Grid item xs={5}>
        <ListRickAndMorty />
      </Grid>
    </Grid>
  );
}
