import React from 'react'
import './TaskInput.css'

const TaskInput = ({ value, onChange, onKeyPress }) => (
  <input onKeyPress={onKeyPress} onChange={onChange} value={value} placeholder="Click to add task" />
)

export default TaskInput
