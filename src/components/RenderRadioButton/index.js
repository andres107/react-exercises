import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


export default function radioButton({ options,input, ...rest }) {
  return (<FormControl>
    <RadioGroup {...input} {...rest}>
      {options.map(item=>{
         return (
           <FormControlLabel
             key={item.value}
             value={item.value}
             control={<Radio />}
             label={item.label}
           />
         );
      })}
    </RadioGroup>
  </FormControl>);
}
