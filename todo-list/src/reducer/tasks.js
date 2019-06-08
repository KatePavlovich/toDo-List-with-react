import { ADD_TASK, DELETE_TASK } from '../constants'


export default (tasksState = [], action) => {
  const { type, payload } = action

  switch (type) {
  case DELETE_TASK:
    return tasksState.filter(task => task.id !== payload.id)
  default:
    return tasksState
  }
}
