import React, { Component } from 'react';
const axios = require('axios').default;
async function loadData(url){
  const response = await axios.get(url);
  return response;
}


export const withGetData = (url) => (WrappedComponent) => {
  return class GetData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      }
    }

    async componentWillMount(props){
      const response = await loadData(url);
      this.setState({data: response});
    }

    render(){
      const { data } = this.state;

      console.log(data);
      if(!data || !data.data.results) {
        return <b> Cargando datos...</b>
      }
      return <WrappedComponent data={data}/>
    }
  };
}

export default withGetData;
