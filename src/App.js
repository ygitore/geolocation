import React, { Component } from 'react';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {lat:null, errorMessage:""}
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(position=>this.setState({lat:position.coords.latitude}), e=>this.setState({errorMessage:e.message}))
  }
  render(){
    console.log(this.state.errorMessage)
    return (  
      <div className="App">
        {this.state.lat ? <div>Latitude: {this.state.lat}</div>:<div>Error: {this.state.errorMessage}</div> }
      </div>
    );
  }
}

export default App;
