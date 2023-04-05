import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';


function App() {
  const [date,setDate] =useState( new Date());
  return (
    <div className="App">
      <div className='message'>
          <h1>Just do it!</h1>
       </div>
       <p className='date'>{date.toLocaleDateString()}</p>
        <Form/>
        <Todo />
    </div>
  );
}

export default App;
