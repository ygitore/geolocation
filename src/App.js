import React, { Component } from 'react';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {lat:null, errorMessage:""}
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=>this.setState({lat:position.coords.latitude}), 
      e=>this.setState({errorMessage:e.message})
    )
  }
  render(){
    if(this.state.lat && !this.state.errorMessage){
      return <div>Latitude: {this.state.lat}</div>
    }
    if(!this.state.lat && this.state.errorMessage){
      return <div>Error: {this.state.errorMessage}</div>
    }
    return <div>Loading...</div>
  }
}

export default App;
