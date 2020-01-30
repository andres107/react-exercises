import React, { Component }  from 'react';

export class HelloWorldClass extends Component {
  render(){
    const { text }  = this.props;
    return <h1> Hello world {text}, since class component</h1>;
  }
}

export default HelloWorldClass;
