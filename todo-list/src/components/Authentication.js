import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import CurrentUser from './CurrentUser'
import SignInAndSignUp from './SignInAndSignUp'

const Authentification = ({ loading }) => {
  const user = useContext(UserContext)

  if (loading) return null
  return (
    <div>{user ? <CurrentUser {...user}></CurrentUser> : <SignInAndSignUp></SignInAndSignUp>}</div>
  )
}

export default Authentification
