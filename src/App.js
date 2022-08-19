

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
      name: "karthik",
      age: 22,
    };
    
    console.log("constructor is called..!");
  }
  //here is the default type (visible in ui)

  // increment = () =>this.setState({count: this.state.count + 1});
  // decrement = () =>this.setState({count: this.state.count - 1});
  // reset = () =>this.setState({count: 0});

  //here is the force update type (hidden in ui)

   increment = () =>(this.state.count = this.state.count + 1);
  decrement = () =>(this.state.count = this.state.count - 1); 
  reset = () =>(this.state.count = 0);

  changeName = () =>{
    this.setState({name: "white"})
  };


  componentDidMount(){
    console.log("componentDidMount is called..!");
    //API calls
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate is called..!");
    //API calls
    if (prevState.count !== this.state.count){
      console.log("count:", prevState.count, this.state.count);
      //logic whenever "count" state changes
    }
    if (prevState.name !== this.state.name){
      console.log("name:", prevState.name, this.state.name);
      //logic whenever "name" state changes
    }

    if (prevProps.age !== this.props.age){
      console.log("age:", prevProps.age, this.props.age);
      //logic whenever "age" prop changes
    }
  }


  componentWillUnmount(){
    console.log("componentWillUnmount is called..!");
  }

  
  shouldComponentUpdate(){
    return true;           //if you return false it doesn't anything work in ui
  }

  render(){
    console.log("render is called..!");
    console.log("props:", this.props);
    return <>
      <p>count: {this.state.count}</p>
      <p>name: {this.state.name}</p>
      <p>age: {this.props.age}</p>
      <button onClick={this.changeName}>change name</button>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.reset}>reset</button>

      <button onClick={() => this.forceUpdate()}>force Update</button> 
    </>;
  }
}

 


export default App;
