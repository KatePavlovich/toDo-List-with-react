import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

const ProtectedRoute = (Component) => {
  const WrappedComponent = props => (
    <UserContext.Consumer>
      {user => <Route render={() => (user ? <Redirect to="/" /> : <Component {...props} />)} />}
    </UserContext.Consumer>
  )
  return WrappedComponent
}

export default ProtectedRoute
