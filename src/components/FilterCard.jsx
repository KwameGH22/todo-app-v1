import React from 'react'
import FilterSection from './FilterSection';
import TaskView from './TaskView';
import StatsClear from './StatsClear';

const FilterCard = ({tasks, deleteTask}) => {
  return (
    <div className='card-container'>
        <FilterSection/>
        {tasks.map((task => <TaskView key={task.id} tasks={tasks} deleteTask={deleteTask(tasks.id)}/> ))}
        <StatsClear/>
      
    </div>
  )
}

export default FilterCard
