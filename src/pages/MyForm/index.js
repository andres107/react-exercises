import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'firstLastName',
    'secondLastName',
    'email',
    'cvv',
    'card',
    'sex',
    'cardDateUntil',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo requerido para saber que pokemon eres :)'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Correo electrónico invalido'
  }

  if (
    values.cvv &&
    !/^\d{3}$/.test(values.cvv)
  ) {
    errors.cvv = 'CVV no invalido amiguit@ :(';
  }

  if (
    values.card &&
    !/^\d{16}$/.test(values.card)
  ) {
    errors.card = 'Numero no invalido amiguit@ :(';
  }

  if (
    values.cardDateUntil &&
    !/^\d{1,2}\/\d{2}$/.test(values.cardDateUntil)
  ) {
    errors.cardDateUntil = 'Fecha no invalida amiguit@ :(';
  }
  

  return errors
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})); 

export function MyForm(props) {
  const classes = useStyles();
  const {
    handleSubmit,
    fields,
    onSubmit,
    pristine,
    submitting
  } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper className={classes.paper}>
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
      >
        {fields.map(field =>{
          return (<Grid item key={field.name}><Field {...field}/></Grid>);
        })}
      <Grid item>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={pristine || submitting}
      >
        Enviar
      </Button>
      </Grid>
      </Grid>
      </Paper>
    </form>
  );
}

export default reduxForm({
  // a unique name for the form
  form: 'testForm',
  validate
})(MyForm)
