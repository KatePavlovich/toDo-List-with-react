import React from 'react'
import { UserContext } from '../providers/UserProvider'

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

const withUser = (Component) => {
  const WrappedComponent = props => (
    <UserContext.Consumer>
      {(user) => {
        console.log('i am user', user)
        return <Component user={user} {...props} />
      }}
    </UserContext.Consumer>
  )

  WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`
  return WrappedComponent
}

export default withUser
