import React from 'react'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './config/firebase'
import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import TaskInput from './components/TaskInput/TaskInput'
import TasksList from './components/TasksList/TasksList'
import {
  addTask, deleteTask, completeTask, changeFilter, fetchToDos,
} from './ac/index'
import Authentification from './components/Authentication/Authentication'


class App extends React.Component {
  state = {
    taskText: '',
    user: null,
  }


  unsubscribeFromFireStore = null

  unsubscribeFromAuth = null

  componentDidMount = async () => {
    this.unsubscribeFromFireStore = this.props.getToDos()
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth)
      console.log('user', user)
      this.setState({ user })
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFireStore()
    this.unsubscribeFromAuth()
  }

  handleChange = (e) => {
    this.setState({
      taskText: e.target.value,
    })
  }

  addTask = (e) => {
    const { taskText } = this.state
    const {
      uid, displayName, email, photoURL,
    } = auth.currentUser || {}

    const todo = {
      text: taskText,
      isCompleted: false,
      user: {
        uid, displayName, email, photoURL,
      },
    }

    if (e.key === 'Enter') {
      const { addTodo } = this.props
      addTodo(todo)

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
    const { taskText, user } = this.state
    const {
      tasks, deleteTask, completeTask, filter, changeFilter,
    } = this.props
    const filteredTasks = this.filterTasks(filter, tasks)

    return (
      <div className="container-fluid">
        <h2 className="app-header"> todo list </h2>
        <Authentification user={user}></Authentification>
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
