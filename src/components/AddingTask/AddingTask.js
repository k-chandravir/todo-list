import React, { useState } from 'react'

function AddingTask({todos, setTodos}) {

    const [todo, setTodo] = useState("");
    const clearOnClick = () => {
        setTodos();
        setTodo("");
    }

  return (
    <div>
        <input type='text' placeholder='Type Your Todo Here' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => clearOnClick()} >Add Task</button>
    </div>
  )
}

export default AddingTask;