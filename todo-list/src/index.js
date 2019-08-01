import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import TodosProvider from './providers/TodosProvider'
import './index.css'
import App from './app'
import UserProvider from './providers/UserProvider'

ReactDOM.render(
  <Router>
    <UserProvider>
      <TodosProvider >
        <App />
      </TodosProvider >
    </UserProvider>
  </Router>,
  document.getElementById('root'),
)
