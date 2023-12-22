import React from 'react'

const FilterSection = () => {
  return (
    <div className='filter-section'>
      <button type="button" class="all">All</button>
      <button type="button" class="active">Active</button>
      <button type="button" class="completed">Completed</button>
    </div>
  )
}

export default FilterSection
