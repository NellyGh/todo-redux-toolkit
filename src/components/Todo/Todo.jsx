
import React, { useMemo,memo,useCallback, useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../store/slices/todos/todosSlice'
import TodoItem from '../TodoItem/TodoItem'

function Todo() {
    useEffect(()=>{
        console.log('todo');
    },[])
    const todos = useSelector(selectTodos)
    // console.log(todos);
    const [firstL,setFirstL] = useState('A')
    const toggleLetter = useCallback(() => {
        setFirstL((prev => prev === "A"? "Z":"A"))
}, [])

const filterData = useMemo(()=>{
    return firstL === "A"? [...todos].sort((a,b)=> a.todo > b.todo ? 1: -1):
     [...todos].sort((a,b)=> a.todo > b.todo ? -1: 1)
 },[firstL, todos])
  return (
    <>
        <div className='sort'>
            <button onClick={toggleLetter} className='sort_item'>{firstL === "A"? "A - Z":"Z - A"}</button>
        </div>
        {
            filterData.map(todo =>(
                <TodoItem 
                 key={todo.id}
                 id={todo.id}
                 todo={todo.todo}
                 completed={todo.completed}
                />
            ))
        }
    </>
  )
}

export default memo(Todo)