

import React from "react";

import AppFunc from "./funC";
//----create a class component in another file----------
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      age: 27,
      Name: "gopi",
    };
  }

handleClick =() => {
  console.log(this.state.count);
  this.setState({ age: 22, Name: "karthik"});
  console.log(this.state.count);
}
  render(){
    return <>
      <p>hello {this.props.name}- class!</p>
      <p>age: {this.state.age}</p>
      <p>Name: {this.state.Name}</p>
      <button onClick={this.handleClick}>click me</button>
      <AppFunc name = "sakthi"/>
    </>;
    
  }
}

export default App;
