import {
  ADD_TASK, DELETE_TASK, COMPLETE_TASK, CLEAR_COMPLETED_TASKS, CREATE_TASK_ERR, FETCH_TASKS,
} from '../constants'


const tasks = (tasksState = [], {
  id, text, isCompleted, type, err, todos,
}) => {
  console.log('AC', todos)
  switch (type) {
  case FETCH_TASKS:
    return [...todos]
  case ADD_TASK:
    return [...tasksState, {
      text, isCompleted,
    }]
  case CREATE_TASK_ERR:
    console.log('create todo err', err)
    return tasksState
  case DELETE_TASK:
    return [...tasksState].filter(task => task.id !== id)
  case COMPLETE_TASK:
    return [...tasksState].map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
  case CLEAR_COMPLETED_TASKS:
    return [...tasksState].map((task) => {
      task.isCompleted = false
      return task
    })

  default:
    return tasksState
  }
}

export default tasks
