import React from 'react'
import TaskContext from '../../utils/TaskContext'


const NewTaskForm = () => {
  return (
    <TaskContext.Consumer>
      {
        ({task, handleInputChange, handleFormSubmit}) => (
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
    </TaskContext.Consumer>
  )
}

export default NewTaskForm