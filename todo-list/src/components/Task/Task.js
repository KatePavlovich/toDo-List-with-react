import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'

const Task = ({
  text, isCompleted, deleteTask, id, completeTask,
}) => (
  <li className="task">
    <input type="checkbox" checked={isCompleted ? 'checked' : ''} onChange={() => completeTask(id, isCompleted)} />
    <p className={isCompleted ? 'done' : ''}>{text}</p>
    <span className="deleteBtn" onClick={() => deleteTask(id)}>x</span>
  </li>
)

export default Task

Task.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
}

Task.defaultProps = {
  text: '',
  id: '',
  isCompleted: false,
  deleteTask: () => { },
  completeTask: () => { },
}
