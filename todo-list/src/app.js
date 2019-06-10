import React from 'react'
import { connect } from 'react-redux'
import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import TaskInput from './components/TaskInput/TaskInput'
import TasksList from './components/TasksList/TasksList'
import { addTask, deleteTask, completeTask } from './ac/index'

class App extends React.Component {
  state = {
    taskText: '',
    filter: 'all',
  }

  // getTasks(119876).then((tasksFromServer) => {
  //   const tasks = tasksFromServer.map(i => ({
  //     id: i.id,
  //     title: i.title,
  //     isDone: i.done,
  //   }))
  //   this.setState({
  //     tasks,
  //   })
  // })

  handleChange = (e) => {
    this.setState({
      taskText: e.target.value,
    })
  }


  addTask = (e) => {
    const { taskText } = this.state

    if (e.key === 'Enter') {
      const { addTask } = this.props
      addTask((new Date()).getTime(), taskText, false)

      this.setState({
        taskText: '',
      })
    }
  };


  changeFilter = (filterValue) => {
    this.setState({ filter: filterValue })
  };

  render() {
    const { filter, taskText } = this.state
    const { filteredTasks, deleteTask, completeTask } = this.props

    return (
      <div className="container-fluid">
        <h2 className="app-header"> todo list </h2>
        <TaskInput onKeyPress={this.addTask} onChange={this.handleChange} value={taskText} />
        <TasksList
          tasks={filteredTasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
        <TodoListFooter
          amount={filteredTasks.length}
          filter={filter}
        />
      </div>
    )
  }
}


export default connect(state => ({
  filteredTasks: state.tasks,
}), { addTask, deleteTask, completeTask })(App)
