import React from 'react'
import { connect } from 'react-redux'
import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import TaskInput from './components/TaskInput/TaskInput'
import TasksList from './components/TasksList/TasksList'
import {
  addTask, deleteTask, completeTask, changeFilter,
} from './ac/index'

class App extends React.Component {
  state = {
    taskText: '',
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


  filterTasks = (filter, tasks) => {
    switch (filter) {
    case 'active':
      return tasks.filter(task => !task.isCompleted)
    case 'completed':
      return tasks.filter(task => task.isCompleted)
    default:
      return tasks
    }
  };

  render() {
    const { taskText } = this.state
    const {
      tasks, deleteTask, completeTask, filter, changeFilter,
    } = this.props
    const filteredTasks = this.filterTasks(filter, tasks)

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
          changeFilter={changeFilter}
        />
      </div>
    )
  }
}


export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}), {
  addTask, deleteTask, completeTask, changeFilter,
})(App)
