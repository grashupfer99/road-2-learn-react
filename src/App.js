import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// Component declaration
class App extends Component {

constructor(props){
  super(props);
  this.formatName = this.formatName.bind(this);
}

user = {
  firstName: 'Alex',
  lastName: 'Hunt'
}

formatName(user){
  return `${user.firstName} ${user.lastName}`;
}



  // The element this component returns as specified below
  render() {

    const helloWorld = 'Welcome to the Road to learn React!';
    const name = 'Alexander';

    return (
      <div className="App">
        <h2>{`Hi, ${name}! ${helloWorld}`}</h2>
        <hr/>
        <h3>{this.formatName(this.user)}</h3>
      </div>
    );
  }
}

export default App;
