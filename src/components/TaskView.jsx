import React from 'react';
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TaskView = ({tasks, deleteTask}) => {
  return (
    <div className='task-view'>
      <div class="items">
                        
        <MdCancel/>
        <span className='text'>{tasks.taskTitle}</span>
        <MdDeleteForever onClick={deleteTask}/>
                        
     </div>
    </div>
  )
}

export default TaskView
