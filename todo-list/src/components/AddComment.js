import React, { Component } from 'react'
import { firestore } from '../config/firebase'
import { collectIdsAndDocs } from '../utilities'


class AddComment extends Component {
  state = { content: '' };

  // get taskId() {
  //   return this.props.match.params.id
  // }

  // get taskRef() {
  //   return firestore.doc(`todos/${this.taskId}`)
  // }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  };

  updateCommentsLength = () => {
    console.log('commentOBJECT', this.props.commentsLength)
    this.taskRef.add({ comments2: this.props.commentsLength })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onCreate(this.state)

    // this.updateCommentsLength()

    this.setState({ content: '' })
  };


  // unsubscribeFromTask = null

  // componentDidMount = async () => {
  //   this.unsubscribeFromTask = this.taskRef.onSnapshot((snapshot) => {
  //     const task = collectIdsAndDocs(snapshot)
  //     console.log('snapshot', task)
  //     this.setState({ task })
  //   })
  // }

  // componentWillUnmount = () => {
  //   this.unsubscribeFromTask()
  // }


  render() {
    const { content } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="AddComment">
        <input
          type="text"
          name="content"
          placeholder="Comment"
          value={content}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Comment" />
      </form>
    )
  }
}

export default AddComment
