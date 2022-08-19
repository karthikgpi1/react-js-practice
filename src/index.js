import React from 'react';
import ReactDOM from 'react-dom';

//jsx:---------------------------------------

// const element = <p>hello..!</p>;
const name ="karthik";
const students = [24,234,345];
const obj = {name: "gopi"};


const ele =<p>hello {students.map ((st) => st)}</p>;
const ele1 =<p>hello {obj.name}</p>;
//render the reactapp in the dom:--------------------------

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<p>hello {name}</p>, document.getElementById('root'));

// ReactDOM.render(ele, document.getElementById('root'));
ReactDOM.render(ele1, document.getElementById('root'));


