import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import TasksList from './components/TasksList'
import Authentification from './components/Authentication'
import UserProfile from './components/UserProfile'
import TodoPage from './components/TodoPage'

const App = () => <div className="container-fluid">
  <Link to="/"><h2 className="app-header"> todo list </h2></Link>
  <Authentification ></Authentification>
  <Switch >
    <Route exact path='/' component={TasksList}></Route>
    <Route exact path='/profile' component={UserProfile}></Route>
    <Route exact path='/todos/:id' component={TodoPage}></Route>
  </Switch>

  {/* <TodoListFooter
          amount={filteredTasks.length}
          filter={filter}
          changeFilter={changeFilter}
          todos={tasks}
        /> */}
</div>


export default App
