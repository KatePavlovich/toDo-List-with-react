import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../constants'


const tasks = (tasksState = [], {
  id, text, isCompleted, type,
}) => {
  switch (type) {
  case ADD_TASK:
    return [...tasksState, {
      id, text, isCompleted,
    }]
  case DELETE_TASK:
    return [...tasksState].filter(task => task.id !== id)
  case COMPLETE_TASK:
    return [...tasksState].map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

  default:
    return tasksState
  }
}

export default tasks
