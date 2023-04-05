import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo(state,{payload}){
               state.unshift({
                id:new Date().getTime().toString(),
                todo:payload,
                completed:false

            })
           
        },
        checkTodo(state,{payload}){
            const index = state.findIndex(indx => indx.id === payload) 
            state[index].completed = !state[index].completed
        },
        delTodo(state,{payload}){
            return state.filter(item => item.id !== payload)
            
        }
    }
})

export const selectTodos = state =>state.todos

export const {addTodo,checkTodo,delTodo} = todosSlice.actions

export const todosReducer = todosSlice.reducer