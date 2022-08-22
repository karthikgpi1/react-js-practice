import React from "react";

function Counter(){
    const [state, setState] = React.useState({
        count:22,
        name: "karthik",
    });

    const increment = () => setState({ ...state, count: state.count + 1});
    const decrement = () => setState({ ...state, count: state.count - 1});
    const reset = () => setState({ ...state, count: 0 });

    return (
        <>
         <p>Count: {state.count}</p>
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
         <button onClick={reset}>reset</button>
         <p>name: {state.name}</p>
         <button onClick={() => setState({ ...state, name: "white"})}>change</button>
        </>
    )
}

export default Counter;
 