import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo, delTodo } from '../../store/slices/todos/todosSlice'
import './TodoItem.css'
import trash from '../../Images/trash.png'
function TodoItem({todo,completed,id}) {
     const dispatch = useDispatch()
  return (
    <div className='todo'>
        <h2 style={{ textDecoration:completed ? 'line-through': 'none'}}>
            {todo} 
            <div className='row'>
                    <button onClick={() => dispatch(checkTodo(id))}>
                    {completed ?'✓': ''}
                    </button>
                    <img onClick={() =>dispatch(delTodo(id))} src={trash} alt=''/>
                </div>
        </h2>
    </div>
  )
}

export default memo(TodoItem)