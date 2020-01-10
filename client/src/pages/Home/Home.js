import React, {Component} from 'react';
import NewTaskForm from '../../components/NewTaskForm'
import TaskList from '../../components/TaskList'
import axios from 'axios'
import TaskContext from '../../utils/TaskContext'

class Home extends Component {
  state = {
    task: '',
    handleInputChange: event =>{
      this.setState({[event.target.name]: event.target.value})
    },
    handleFormSubmit: event => {
      event.preventDefault()
      axios.get('tasks')
        .then(data => console.log(data))
        .catch(e=>console.error(e))
    }
  }  
  render () {
    return (
      <TaskContext.Provider value = {this.state}>
        <NewTaskForm/>
        <TaskList/>
      </TaskContext.Provider>
    )
  }
}

export default Home