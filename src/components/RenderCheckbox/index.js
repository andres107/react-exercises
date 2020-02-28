import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function renderCheckbox({ input, label }) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  );
}
