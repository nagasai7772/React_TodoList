import React, { useState } from "react";
import './Todolist.css'
const Todolist = () => {
  const [addTodo, setAddTodo] = useState([]);
  const [newtask, setNewTask] = useState("");
  const InputChange = (event) => {
    let addtask = event.target.value;
    setNewTask(addtask);
  };
  const deleteTask = (index) => {
    const updateTask = addTodo.filter((ele, idx) => idx !== index);
    setAddTodo(updateTask);
  };
  const addTask_btn = () => {
    if (newtask.length > 0) {
      setAddTodo((task) => [...task, newtask]);
      setNewTask("");
    }
  };
  const editTask = (index) => {
    const taskToEdit = addTodo[index];          
    setNewTask(taskToEdit);                     
    const updateList = addTodo.filter((_, idx) => idx !== index); 
    setAddTodo(updateList);                     
  };
  
  return (
      <center>
    <div className="container">
      <h1 className="heading">To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newtask}
          placeholder="Enter A Tasks..."
          onChange={InputChange}
        />
        &nbsp;&nbsp;
        <button onClick={addTask_btn} className="add_task_btn">Add Task</button>
      </div>
      <div className="todolists">
        {addTodo?.map((task, index) => {
          return (
            <p key={index} className="lists">
              <p>{task}</p>
              <div className="btns_sec">
              <button onClick={() => editTask(index)} className="edit_btn">Edit</button>
              <button onClick={() => deleteTask(index)} className="remove_btn">Remove</button>
              </div>
            </p>
          );
        })}
      </div>

    </div>
    </center>
  );
};

export default Todolist;
