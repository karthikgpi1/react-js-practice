

import React from "react";

// import AppFunc from "./funC";
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



// class App extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "karthik",
//       age: 22,
//     };
    
//     console.log("constructor is called..!");
//   }
//   //here is the default type (visible in ui)

//   // increment = () =>this.setState({count: this.state.count + 1});
//   // decrement = () =>this.setState({count: this.state.count - 1});
//   // reset = () =>this.setState({count: 0});

//   //here is the force update type (hidden in ui)

//    increment = () =>(this.state.count = this.state.count + 1);
//   decrement = () =>(this.state.count = this.state.count - 1); 
//   reset = () =>(this.state.count = 0);

//   changeName = () =>{
//     this.setState({name: "white"})
//   };


//   componentDidMount(){
//     console.log("componentDidMount is called..!");
//     //API calls
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate is called..!");
//     //API calls
//     if (prevState.count !== this.state.count){
//       console.log("count:", prevState.count, this.state.count);
//       //logic whenever "count" state changes
//     }
//     if (prevState.name !== this.state.name){
//       console.log("name:", prevState.name, this.state.name);
//       //logic whenever "name" state changes
//     }

//     if (prevProps.age !== this.props.age){
//       console.log("age:", prevProps.age, this.props.age);
//       //logic whenever "age" prop changes
//     }
//   }


//   componentWillUnmount(){
//     console.log("componentWillUnmount is called..!");
//   }

  
//   shouldComponentUpdate(){
//     return true;           //if you return false it doesn't anything work in ui
//   }

//   render(){
//     console.log("render is called..!");
//     console.log("props:", this.props);
//     return <>
//       <p>count: {this.state.count}</p>
//       <p>name: {this.state.name}</p>
//       <p>age: {this.props.age}</p>
//       <button onClick={this.changeName}>change name</button>
//       <button onClick={this.increment}>increment</button>
//       <button onClick={this.decrement}>decrement</button>
//       <button onClick={this.reset}>reset</button>

//       <button onClick={() => this.forceUpdate()}>force Update</button> 
//     </>;
//   }
// }


//-----------form validation------

const validateEmail = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      emailId: "",
      roleAppliedFor: "",
      coverLetter: "",
      termsAndCond: "",
      errors:{
        fullName: "",
        emailId: "",
        coverLetter: "",
        termsAndCond: "",
      }
    };
  }

  handleChange = ({ target: {name, value, type, checked}}) =>{
    if (type === "checkbox") value = checked;

    const errors = this.state.errors;

    switch(name){
      case "fullName": {
        if(value.length <=5) {
          errors.fullName = "full name should be atleast 6 characters";
        }else errors.fullName = "";
        break;
      }

      case "emailId": {
        if(value.length <=5) {
          errors.emailId = "email should be atleast 6 characters";
        }else if (!validateEmail.test(value)){
          errors.emailId = "email is invalid";
        }else errors.emailId ="";
        break;
      }

      case "coverLetter": {
        if(value.length <=9) {
          errors.coverLetter = "cover letter should be atleast 6 characters";
        }else errors.coverLetter = "";
        break;
      }

      case "termsAndCond": {
        if(!value) {
          errors.termsAndCond = "Terms should be accepted";
        }else errors.termsAndCond = "";
        break;
      }

    }




    this.setState({ [name]: value, errors});
  }


  handleSubmit = (event) =>{
    event.preventDefault();
    //fetch api => this.state
    console.log(this.state);
  }


  render (){

    return (
     <>
        <p>job application form</p>
       <form onSubmit={this.handleSubmit}>
           <div>
             <label>full name :</label>
             <input name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange}/>
             <span>{this.state.errors.fullName}</span>
          </div>
          <br/>
          <div>
             <label>Email id :</label>
             <input name="emailId" type="email" value={this.state.emailId} onChange={this.handleChange}/>
             <span>{this.state.errors.emailId}</span>
          </div>
          <br/>

          <div>
             <label>role applied for :</label>
             <select name="roleAppliedFor" value={this.state.roleAppliedFor} onChange={this.handleChange}>
                <option value="react">react developer</option>
                <option value="node">node developer</option>
                <option value="mern">mern developer</option>
             </select>
          </div>
          <br/>

          <div>
             <label>cover letter :</label>
             <textarea name="coverLetter" value={this.state.coverLetter} onChange={this.handleChange}></textarea>
             <span>{this.state.errors.coverLetter}</span>
          </div>
          <br/>

          <div>
             <input name="termsAndCond" type="checkbox" value={this.state.termsAndCond} onChange={this.handleChange}/>
             <label>i agree T&C</label> 
             <span>{this.state.errors.termsAndCond}</span>
          </div>

          <br/>

          <div>
            <button type="submit">submit</button>
          </div>
        </form> 
     </>
    );
  }
}

export default App;
