import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="App">
     
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? 'completed' : 'not-completed'}`}
          >
            <h3>{task.taskName}</h3>
            <div className="buttons">
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    <div className='footer'>&copy; Pruthvi S</div>
    </div>
  );
}

export default App;
