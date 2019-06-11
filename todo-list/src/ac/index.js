import {
  ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER, CLEAR_COMPLETED_TASKS,
} from '../constants'

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
})

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
})

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id,
})

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
})

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS,
})
