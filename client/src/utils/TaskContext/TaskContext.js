import React, {createContext} from 'react'

const TaskContext = createContext({
  task: '',
  isDone: false,
  dispTask: '',
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default TaskContext