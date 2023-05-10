import React, {useState} from 'react';
import AddingTask from '../AddingTask/AddingTask';


const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AddingTask todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todo
