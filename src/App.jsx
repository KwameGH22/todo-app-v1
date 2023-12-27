import { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import Form from './components/Form';
import './App.css'
import FilterCard from './components/FilterCard';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      taskTitle: text,
      complete: false,
    }
    setTasks([newTask, ...tasks]);
  }

  const handleDeleteTask = (id) => {
    const updatedTaskArray= tasks.filter((task) => task.id !==id);
    setTasks(updatedTaskArray);
  }

  const handleToggle = (id) => {
    setTasks(
      tasks.map(task => { if(task.id===id) {return {...task, complete: !task.complete}}})
    )
  }

  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <div className='title-bar'>
            <h3 className='header-text'>TODO</h3>
            <FaMoon style={{color: 'white'}}/>
          </div>
          <div className='form-container'>
            <Form addNewTask={addTask}/>
          </div>
          <FilterCard tasks={tasks} deleteTask={handleDeleteTask} toggleHandler={handleToggle}/>
        </div>

      </div>
    </>
  )
}

export default App
