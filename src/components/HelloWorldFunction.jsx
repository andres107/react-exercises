import React from 'react'

export function HelloWorldFunction(props) {
  const { text }  = props;
  return (<h1> Hello world {text}, since function component</h1>);
}

export default HelloWorldFunction;
