import React from 'react'
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
