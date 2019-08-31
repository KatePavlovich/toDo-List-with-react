import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Input } from './Styles'
import { signInWithGoogle } from '../config/firebase'
import ProtectedRoute from './ProtectedRoute'

class SignIn extends Component {
  state = { email: '', password: '' }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  signIn = () => {
    signInWithGoogle()
      .then(() => {
        const { user } = this.props
        console.log('An', user)
      })
      .catch((error) => {
        console.log('An error happened.')
      })
  }

  render() {
    const { email, password } = this.state
    return (
      <Form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <Input type="submit" value="Sign In" />
        <Button onClick={this.signIn}>Sign In With Google</Button>
      </Form>
    )
  }
}

export default ProtectedRoute(SignIn)

const Button = styled.button`
  height: 44px;
  max-width: 350px;
  width: 100%;
  padding-left: 0.5rem;
  font-family: 'Beth Ellen', cursive;
  box-sizing: content-box;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  box-shadow: 2px 2px 0 #000;
  opacity: 0.7;
  outline: none;

  &:hover {
    opacity: 1;
  }
`
