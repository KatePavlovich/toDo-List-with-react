import { ADD_TASK, DELETE_TASK } from '../constants'

export function addTasks() {
  return {
    type: ADD_TASK,
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: { id },
  }
}
