
import { addTodo, todosSlice } from "../slices/todos/todosSlice"


export const ignoreEmptyTxt = (store) =>(next) =>(action) =>{
    if (action.type === 'todos/addTodo' && action.payload.trim()==='') {
        return
    }
    return next(action)
}


