

import React from "react";

import AppFunc from "./funC";
//----create a class component in another file----------
// class App extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       age: 27,
//       Name: "gopi",
//     };
//   }

// handleClick =() => {
//   console.log(this.state.count);
//   this.setState({ age: 22, Name: "karthik"});
//   console.log(this.state.count);
// }
//   render(){
//     return <>
//       <p>hello {this.props.name}- class!</p>
//       <p>age: {this.state.age}</p>
//       <p>Name: {this.state.Name}</p>
//       <button onClick={this.handleClick}>click me</button>
//       <AppFunc name = "sakthi"/>
//     </>;
    
//   }
// }

//------increment, decrement and reset -------

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  increment = () =>this.setState({count: this.state.count + 1});
  decrement = () =>this.setState({count: this.state.count - 1});
  reset = () =>this.setState({count: 0});



  render(){
    return <>
      <p>count: {this.state.count}</p>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.reset}>reset</button>
    </>;
  }
}

 


export default App;
