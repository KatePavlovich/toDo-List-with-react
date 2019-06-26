import React from 'react'
import SignInAndSignUp from '../SignInAndSignUp/SignInAndSignUp'
import CurrentUser from '../CurrentUser/CurrentUser'

const Authentification = ({ user, loading }) => {
  if (loading) return null
  return (
    <div>{user ? <CurrentUser {...user}></CurrentUser> : <SignInAndSignUp></SignInAndSignUp>}</div>
  )
}

export default Authentification
