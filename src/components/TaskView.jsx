import React from 'react';
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const TaskView = ({task, deleteTask, toggleHandler}) => {
  return (
    <div className='task-view'>
      <div className="items">
       <div className='listItem'>
          {task.complete ? <FaCheck  onClick={() => toggleHandler(task.id)}/>:<MdCancel onClick={() => toggleHandler(task.id)}/>}
          <p className={`task.complete && $(canceltext)`}>{task.taskTitle}</p>
       </div>
      </div>
     <div>
        <MdDeleteForever onClick={() => deleteTask(task.id)}/>
     </div>
     
    </div>
  )
}

export default TaskView
