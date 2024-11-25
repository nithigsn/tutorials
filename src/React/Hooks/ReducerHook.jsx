import React, { useReducer } from 'react'


// basically to manage state but with little complex 
// like you need to do more things based on single state


const reducerFn = (state, action) => {
    switch (action.type) {
        case "incr":
            return { count: state.count + 1 };
        case "decr":
            return { count: state.count - 1 };
        default:
            return state
    }
}

const Counter ={
    count:0
}

const ReducerHook = () => {

    const [state, dispatch] = useReducer(reducerFn, { count: 0 })
    // can also define and use default value like this useReducer(reducerFn, Counter )

    const incrementFn = () => dispatch({ type: "incr" })
    // pass the type or values using dispatch function
    const decrementFn = () => dispatch({ type: "decr" })

    return (
        <div className='w-full h-full items-center'>
            <p>{state.count}</p>
            <button onClick={incrementFn}>+</button>
            <button onClick={decrementFn}>-</button>

        </div>
    )
}

export default ReducerHook
