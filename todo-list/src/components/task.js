import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../ac'

class Task extends React.Component {
    handleDelete = () => {
      const { task } = this.props
      deleteTask(task.id)
    }

    render() {
      return (
        <li className="task" id={this.props.id}>
          <input type="checkbox" checked={this.props.task.isDone ? 'checked' : ''} onChange={() => this.props.updateCallBack(this.props.task)} />
          <p className={this.props.task.isDone ? 'done' : ''} >{this.props.task.title}</p>
          <span className="deleteBtn" onClick={this.handleDelete}>x</span>
        </li>
      )
    }
}

export default connect(null, { deleteTask })(Task)
