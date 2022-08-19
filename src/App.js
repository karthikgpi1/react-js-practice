

import React from "react";

import AppFunc from "./funC";
//----create a class component in another file----------
class App extends React.Component{
  render(){
    console.log(this.props);
    return <>
      <p>hello {this.props.name}- class!</p>
      <AppFunc/>
    </>;
    
  }
}

export default App;
