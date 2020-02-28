import React from "react";
import TextField from '@material-ui/core/TextField';

export default function RenderTextField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}){
  return (
    <TextField
      label={label}
      placeholder={label}
      fullWidth
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
    );
}
