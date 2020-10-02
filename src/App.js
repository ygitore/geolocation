import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {lat:null, errorMessage:""}
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=>this.setState({lat:position.coords.latitude}), 
      error=>this.setState({errorMessage:error.message})
    )
  }
  render(){
    if(this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat = {this.state.lat} />
    }
    if(!this.state.lat && this.state.errorMessage){
      return <div>Error: {this.state.errorMessage}</div>
    }
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;
