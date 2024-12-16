
import { createSlice } from "@reduxjs/toolkit";


// set initial state
const initialState = {
    count: 0
}



export const counterSlice = createSlice({
    // slice name
    name: "counter",
    // slice initiak state
    initialState,
    // reducer function and actions
    reducers: {
        increment: (state) => {
            state.count += 1

        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
});


export const { increment, decrement,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;


