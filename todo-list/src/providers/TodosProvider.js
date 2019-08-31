import React, { Component, createContext } from 'react'
import { firestore } from '../config/firebase'
import { collectIdsAndDocs } from '../utilities'

export const TodosContext = createContext()

class PostssProvider extends Component {
  state = { todos: [] }

  unsubscribeFromFireStore = null

  componentDidMount = () => {
    this.unsubscribeFromFireStore = firestore.collection('todos').onSnapshot((snapShot) => {
      const todos = snapShot.docs.map(collectIdsAndDocs)
      this.setState({ todos })
    })

    console.log('object', this.state.todos)
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFireStore()
  }

  render() {
    const { todos } = this.state
    const { children } = this.props

    return <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
  }
}

export default PostssProvider
