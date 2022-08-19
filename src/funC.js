import React from "react";

//----create a functional component in another file----------

function AppFunc(props){
    console.log(props);
    return <p>hello {props.name} - functional !</p>;
    
}

export default AppFunc;

