import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// import AppFormik from "./appFormik";

import PostApp from "./postapp";

// import Counter from "./counter";

// import Counter2 from "./counter2";

// import Counter3 from "./counter3";

import 'bootstrap/dist/css/bootstrap.min.css';



// class Test extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       age: 0,
//       show: true,
//     };
    
//   }
//   render () {
//     return (
//       <> 
//       <button onClick={() => this.setState({age: this.state.age + 1})}>increment age</button>  
//       <button onClick={() => this.setState({show: !this.state.show})}>Hide/show</button>                                       
//       {this.state.show ? <App age={this.state.age}/> : <></>}
//       </>
//     );
//   }

// }

// export default Test;


// ReactDOM.render(<Test />, document.getElementById('root')); 

// ReactDOM.render(<App />, document.getElementById('root')); 

// ReactDOM.render(<AppFormik />, document.getElementById('root')); 

ReactDOM.render(<PostApp />, document.getElementById('root')); 

// ReactDOM.render(<Counter />, document.getElementById('root'));

// ReactDOM.render(<Counter2 />, document.getElementById('root'));




//------------jsx:---------------------------------------

// const element = <p>hello..!</p>;
// const name ="karthik";
// const students = [24,234,345];
// const obj = {name: "gopi"};


// const ele =<p>hello {students.map ((st) => st)}</p>;
// const ele1 =<p>hello {obj.name}</p>;

//------class component-------

// class App extends React.Component{
//   render(){
//     return <p>hello karthik..!</p>;
//   }
// }
//----function component-----
//  function App(){
//   return <p>hello karthik...!</p>;
//  }

//----------render the reactapp in the dom:--------------------------

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<p>hello {name}</p>, document.getElementById('root'));

// ReactDOM.render(ele, document.getElementById('root'));
// ReactDOM.render(ele1, document.getElementById('root'));

// ReactDOM.render(
// <div>                                         
//   <App/>
//   <AppFunc/>
//   <p>hello karthik</p>
// </div>, document.getElementById('root'));           // using div or React.fragment 


//----counter3--componentwillUnMount-----------------

// function Test () {
//     const [show, setShow] = React.useState(true);

//     return (
//         <>
//         <button onClick={() => setShow(!show)}>show/hide</button>
//         {show ? <Counter3 /> : <></>}
//         </>
//     );
// }

// ReactDOM.render(<Test />, document.getElementById('root'));


