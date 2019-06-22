import React from 'react'
import { connect } from 'react-redux'
import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import TaskInput from './components/TaskInput/TaskInput'
import TasksList from './components/TasksList/TasksList'
import {
  addTask, deleteTask, completeTask, changeFilter, fetchToDos,
} from './ac/index'

class App extends React.Component {
  state = {
    taskText: '',
  }

  unsubscribe = null

  componentDidMount = async () => {
    this.unsubscribe = this.props.getToDos()
  }

  componentWillUnmount = () => {
    this.unsubscribe()
  }

  handleChange = (e) => {
    this.setState({
      taskText: e.target.value,
    })
  }

  addTask = (e) => {
    const { taskText } = this.state

    if (e.key === 'Enter') {
      const { addTodo } = this.props
      addTodo({ text: taskText, isCompleted: false })

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
          todos={tasks}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: task => dispatch(addTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  getToDos: () => dispatch(fetchToDos()),
  completeTask: (id, isCompleted) => dispatch(completeTask(id, isCompleted)),
  changeFilter: activeFilter => dispatch(changeFilter(activeFilter)),
})


export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}), mapDispatchToProps)(App)
