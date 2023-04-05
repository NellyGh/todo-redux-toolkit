import {configureStore} from "@reduxjs/toolkit";
import { ignoreEmptyTxt } from "./middlewares/txtMiddleware";
import {  todosReducer } from "./slices/todos/todosSlice";
import { txtReducer } from "./slices/txt/txtSlice";

const store = configureStore({
        reducer: {
            txt:txtReducer,
            todos:todosReducer,
        },
        middleware:(getDefaultMiddleware) => {
            return [
                ...getDefaultMiddleware(),
               
                ignoreEmptyTxt
            ]
        }
       
 })

 export default store