import React, { useContext } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// import TodoListFooter from './components/TodoListFooter/TodoListFooter'
import Header from './components/Header'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import TodoPage from './components/TodoPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/signup" component={SignUp}></Route>

      <Route exact path="/profile" component={UserProfile}></Route>
      <Route exact path="/todos/:id" component={TodoPage}></Route>
    </Switch>

    {/* <TodoListFooter
          amount={filteredTasks.length}
          filter={filter}
          changeFilter={changeFilter}
          todos={tasks}
        /> */}
  </div>
)

export default App
