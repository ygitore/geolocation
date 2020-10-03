import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './App.css';

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
      return (
        <div  className="season-display">
          <SeasonDisplay lat = {this.state.lat} />
        </div>
      )
    }
    if(!this.state.lat && this.state.errorMessage){
      return <div>Error: {this.state.errorMessage}</div>
    }
    return (
      <div>
        <Spinner message="Please accept location request"/>
      </div>
    )
  }
}

export default App;
