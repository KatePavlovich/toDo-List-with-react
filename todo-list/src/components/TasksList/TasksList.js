import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task'
import './TasksList.css'

const TasksList = ({ tasks, deleteTask, completeTask }) => (< ul className="tasks" >
  {
    tasks.map(({ id, text, isCompleted }) => (
      <Task text={text} isCompleted={isCompleted} key={id} id={id}
        deleteTask={deleteTask} completeTask={completeTask} />))
  }
</ul >)


export default TasksList

TasksList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
}

TasksList.defaultProps = {
  tasks: [],
  deleteTask: () => { },
  completeTask: () => { },
}
