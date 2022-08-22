import { useState, useEffect } from "react";

function Counter3(){
   

    const [count, setCount] =useState(0);
    const [name, setName] =useState("karthik");

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const changeName = () => setName("white")

    //componentDidMount
    useEffect(() => {
       console.log("useEffect 1");
       // componentWillUnMount
       return () =>{
        console.log("useEffect 4");
       }
    }, []);

    //componentDidUpdate 
    useEffect (() => {
        console.log("useEffect 2");
    });

     //componentDidUpdate - count
     useEffect (() => {
        console.log("useEffect 3");
    },[count]);

    return (
        <>
         <p>Count: {count}</p>
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
         <button onClick={reset}>reset</button>
         <p>name: {name}</p>
         <button onClick={changeName}>change</button>
        </>
    )
}

export default Counter3;
 