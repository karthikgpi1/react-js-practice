import React from "react";

//Actions
const increment = "increment";
const decrement = "decrement";
const reset = "reset";

// Reducer Function
const countReducer = (count, action) => {
    switch (action.type){
        case increment: {
            return count + action.by;
        }
        case decrement: {
            return count - action.by;
        }
        case reset: {
            return 0
        }
        default: {
            return count;
        }
    }
}
function Counter2(){
    const [count, dispatch] = React.useReducer(countReducer, 0)
   
    // const increment = () => dispatch("increment");
    // const decrement = () => dispatch("decrement");
    // const reset = () => dispatch("reset");

    return (
        <>
         <p>Count: {count}</p>
         <button onClick={() => dispatch({ type : increment, by: 10 })}>increment</button>
         <button onClick={() => dispatch({ type : decrement, by: 5 })}>decrement</button>
         <button onClick={() => dispatch({ type : reset })}>reset</button>
        </>
    )
}

export default Counter2;
 