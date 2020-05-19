import React, { useState } from "react";
import FibonacciMemo from "../../components/FibonacciMemo";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export function Fibonacci(){
  const [text, setText] = useState('');
  const [showFibo, setShowFibo] = useState(false);
  const [number, setNumber] = useState(0);
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickButton = (e) => {
    setShowFibo(true);
    setNumber(parseInt(text));
  };
   
  return (
      <Grid
        container spacing={3}
        direction="column"
	justify="space-between"
	alignItems="center"
      >
        <Grid item>
          Escribe el número de fibonacci que se desea ver: 
        </Grid>
        <Grid item>
          <TextField
	    required
	    id="standard-required"
	    label="Fibonacci"
	    onChange={(e)=> onChangeText(e)}
	  />
        </Grid>
        <Grid item>
        <Button
	  variant="contained"
	  onClick={(e) => onClickButton(e)}
	>
          Buscar
        </Button>
        </Grid>
        <Grid item>
	  { showFibo ? <FibonacciMemo number={number}/> : null}
        </Grid>
      </Grid>);
}

export default Fibonacci;
