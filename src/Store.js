import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "./slice/CustomerSlice.js"


export const Store = configureStore(
    {
        devTools : false ,
        reducer :{
            customers : customerReducer
        }
    }
)

