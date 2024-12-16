import React, { useReducer } from 'react'


// basically to manage state but with complex 
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


let Counter ={
    count:0
}

const ReducerHook = () => {

    const [state, dispatch] = useReducer(reducerFn, Counter)

    
    return (
        <div className='w-full h-full items-center'>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "incr" })}>+</button>
            <button onClick={()=>dispatch({ type: "decr" })}>-</button>

        </div>
    )
}

export default ReducerHook
