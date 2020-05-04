import React from 'react';
import BoyAndGirl from '../../components/BoyAndGirl';
import Grid from '@material-ui/core/Grid';

export default function ShouldUpdate(){
  const options = [
    'Hamburguesas',
    'Pizza',
    'Pozole',
    'Carnitas',
    'Tacos al pastor',
    'Birria',
    'Tacos Suadero',
    'Pollo frito',
    'Comida China',
    'Comida india',
    'Chilaquiles',
    'Quesadillas',
    'Gorditas',
    'Pambazos',
    'Tacos de cecina'
  ];

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <BoyAndGirl options={options}/>
      </Grid>
    </Grid>
  );
}
