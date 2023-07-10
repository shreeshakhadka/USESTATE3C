import React from "react";
import { useState } from "react";
import "../src/todolist.css";


const TodoList = ({ tasks }) => {
  const [todoItems, setTodoItems] = useState(tasks);
  const [newTask, setNewTask] = useState('');

  const toaddTask = () => {
    if (newTask.trim() !== '') {
      setTodoItems([...todoItems, newTask]);
      setNewTask('');
    }
  };

  const toremoveTask = (index) => {
    const updatedTasks = [...todoItems];
    updatedTasks.splice(index, 1);
    setTodoItems(updatedTasks);
  };

  return (
    <>
        <h1 className= "heading"> To do List</h1>
        {todoItems.map((task, index) => (
          <li key={index}>
            {task}
            <button className = 'removebutton' onClick={() => toremoveTask(index)}>Remove</button>
          </li>
        ))}
      <input className = "inputtext"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="addbutton" onClick={toaddTask}>Add</button>
    </>
  );
};

export default TodoList;
