import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/slices/todos/todosSlice'
import { resetTxt, selectTxt, toggleTxt } from '../../store/slices/txt/txtSlice'
import './Form.css'

function Form() {
    const txt = useSelector(selectTxt)
    //  console.log(txt);
     const dispatch = useDispatch()
     
  return (
    <div className='frame'>
        <input type="text" className='txt' value={txt} placeholder='Add Task' onChange={(e)=> dispatch(toggleTxt(e.target.value))} />
        <button className='submit' onClick={()=>(dispatch(resetTxt()),dispatch(addTodo(txt)))}>Add Todo</button>
    </div>
  )
}

export default Form