import React from 'react'
import './Task.css'

const Task = ({
  text, isCompleted, deleteTask, id, completeTask,
}) => (
  <li className="task">
    <input type="checkbox" checked={isCompleted ? 'checked' : ''} onChange={() => completeTask(id)} />
    <p className={isCompleted ? 'done' : ''}>{text}</p>
    <span className="deleteBtn" onClick={() => deleteTask(id)}>x</span>
  </li>
)

export default Task
