import React from 'react'
import PropTypes from 'prop-types'
import './TaskInput.css'

const TaskInput = ({ value, onChange, onKeyPress }) => (
  <input onKeyPress={onKeyPress} onChange={onChange} value={value} placeholder="Click to add task" />
)

export default TaskInput

TaskInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

TaskInput.defaultProps = {
  value: '',
  onChange: () => { },
  onKeyPress: () => { },
}
