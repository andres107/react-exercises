import React, { Component }  from 'react';

const MAX_ITER = 5; 
export class CicleLifeButton extends Component {
  constructor(props){
    super(props);
    this.didUpdate = 1;
    this.shouldUpdate = 1;

    this.state = {
      color: props.color,
      text: props.text,
      title: "Ciclo de vida de un componente"
    };
  }

  componentDidMount(){
      this.setState({
        color: "#B22C50",
        text: "¡Ya estoy aqui montado :P!"
      });
  }

  componentDidUpdate(){
    if(this.didUpdate < MAX_ITER) {
      this.didUpdate++;
      setTimeout(() => {
        this.setState({
          color: "#BB2CA0",
          text: "¡Ya me actualize >:|!"
        });
      }, this.didUpdate * 1000);
    } else {
      setTimeout(() => {
        this.setState({
          color: "#BBFCAF",
          text: "¡Ya no me actualizare!",
          title: "Si das click en el boton morirá y te enviará mensaje desde el más allá(consola)"
        });
      }, this.didUpdate * 1000);
    }
  }

  shouldComponentUpdate(){
    if(this.shouldUpdate < MAX_ITER) {
      this.shouldUpdate++;
      setTimeout(() => {
        this.setState({
          color: "#E83434",
          text: "Aunque no quieras me actualizaré :D"
        });
      }, this.shouldUpdate * 2000);
    }
    return true;
  }

  componentWillUnmount(){
    console.log("Si soy yo desde el más allá, ¡Adios!");
  }

  render(){
    const { color, text, title } = this.state;
    const { onClick } = this.props;

    return (
     <>
      <h5>{title}</h5>
      <button
        style={ { backgroundColor: color } }
        onClick={onClick}
      >
        {text}
      </button>
      </>
    );
  }
}

export default  CicleLifeButton;
