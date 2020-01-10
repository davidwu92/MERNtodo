import React from 'react'

const NewTaskForm = () => {
  return (
    <form>
      <p>
        <label htmlFor="newTask">What do you need to do?</label>
        <input type="text" name="newTask" id="newTask"/>
      </p>
      <p>
        <button>Add Task</button>
      </p>
    </form>
  )
}

export default NewTaskForm