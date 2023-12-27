  import { useState } from "react";

const Form = ({addNewTask}) => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (event) => {
    setTextInputValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTask(textInputValue);
    setTextInputValue('');

  }






  return (
    <div className="form-container">
      <form className='form' onSubmit={handleSubmit}  >
        <input name="task" 
              id="task" 
              value= {textInputValue} 
              onChange={handleInputChange}
              type="text" class="text-input" 
              placeholder="Create new Todo item"
        />
        <button type='submit' 
                className='btn'
                onSubmit={handleSubmit}
                >
                  Add
        </button>
      </form>
    </div>
  )
}

export default Form
