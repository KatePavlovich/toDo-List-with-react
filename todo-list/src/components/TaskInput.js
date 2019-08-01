import React, { Component } from 'react'
import { firestore, auth } from '../config/firebase'

class TaskInput extends Component {
  state = {
    taskText: '',
  }

  handleChange = (e) => {
    this.setState({
      taskText: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { taskText } = this.state
    const {
      uid, displayName, email, photoURL,
    } = auth.currentUser || {}

    console.log(uid, displayName, email, photoURL)

    const task = {
      text: taskText,
      isCompleted: false,
      user: {
        uid, displayName, email, photoURL,
      },
      comments: 0,
      createdAt: new Date(),
    }

    firestore.collection('todos').add(task)

    this.setState({
      taskText: '',
    })
  };


  render() {
    const { taskText } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={taskText} placeholder="Click to add task" />
        <input type="submit" value="Create task" />
      </form>
    )
  }
}

export default TaskInput
