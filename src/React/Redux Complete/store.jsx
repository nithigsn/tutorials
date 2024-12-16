// step1 configure store
import { configureStore } from "@reduxjs/toolkit";


import counterReducer from './Slice/counterSlicer'




//export store and provide store in index.js
// 
 const store = configureStore({

    reducer:{
        counter:counterReducer,

    }
})

export default store;