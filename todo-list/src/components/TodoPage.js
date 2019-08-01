import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Task from './Task'
import Comments from './Comments'
import { firestore } from '../config/firebase'
import { collectIdsAndDocs } from '../utilities'
import withUser from './WithUser'

class TodoPage extends Component {
  state = { task: null, comments: [] }

  get taskId() {
    return this.props.match.params.id
  }

  get taskRef() {
    return firestore.doc(`todos/${this.taskId}`)
  }

  get commentsRef() {
    return this.taskRef.collection('comments')
  }

  unsubscribeFromTask = null

  unsubscribeFromComments = null

  componentDidMount = async () => {
    this.unsubscribeFromTask = this.taskRef.onSnapshot((snapshot) => {
      const task = collectIdsAndDocs(snapshot)
      console.log('snapshot', task)
      this.setState({ task })
    })
    this.unsubscribeFromComments = this.commentsRef.onSnapshot((snapshot) => {
      const comments = snapshot.docs.map(collectIdsAndDocs)
      this.setState({ comments })
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromTask()
    this.unsubscribeFromComments()
  }

  createComment = (comment) => {
    const { user } = this.props
    this.commentsRef.add({ ...comment, user })
  }


  render() {
    const { task, comments } = this.state

    return <section>{task && <Task {...task} comments={comments.length} />}
      <Comments comments={comments} onCreate={this.createComment} /></section>
  }
}

export default withRouter(withUser(TodoPage))
