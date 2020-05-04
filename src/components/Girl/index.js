import React, { Component }  from 'react';

export class Girl extends Component{
  constructor(props){
    super(props);

    this.state = {
      firstOption: props.option
    };
  }


  shouldComponentUpdate(){
    const number = Math.floor(Math.random()* 5 + 1);
    if(number  === 3){
      return true;
    }
    return false;
  }

  render(){
   const { option } = this.props;
   const { firstOption } = this.state;
   if(firstOption == option)
     return <b>Cuando me des una buena opción te diré que si<br/></b>;
  
    return (<b>
      {option}, ¡Si eso!<br/>
      </b>);
  }
}
export default Girl;

