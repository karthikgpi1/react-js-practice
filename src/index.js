import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
// import Appfunc from "./AppFunc";

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


ReactDOM.render(<App />, document.getElementById('root'));                //<App/>
                                                                         //const app = new app();
                                                                         //app.render();
                                                                         


