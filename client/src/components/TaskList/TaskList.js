// for the list of tasks, imported from db
import React from 'react'
import TaskContext from '../../utils/TaskContext'


const TaskList = () => {
  return (
    <TaskContext.Consumer>
      {
        () => (
          <div></div>
        )
      }
    </TaskContext.Consumer>
  )
}

export default TaskList