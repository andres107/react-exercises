import React from 'react';

export function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>El agua hervira.</p>;
  }
  return <p>El agua no hervira.</p>;
}

export default BoilingVerdict;
