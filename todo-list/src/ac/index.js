// import todosRef from 'firebase'
import {
  ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER, CLEAR_COMPLETED_TASKS,
  FETCH_TASKS, CREATE_TASK_ERR,
} from '../constants'
import { firestore } from '../config/firebase'


export const fetchToDos = () => async (dispatch) => {
  await firestore.collection('todos').onSnapshot((snapShot) => {
    const todos = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return dispatch({
      type: FETCH_TASKS,
      todos,
    })
  })
}


export const addTask = newToDo => () => {
  firestore.collection('todos').add({ ...newToDo })
}

export const deleteTask = id => async () => {
  firestore.doc(`todos/${id}`).delete()
}

export const completeTask = (id, isCompleted) => async () => {
  firestore.doc(`todos/${id}`).update({ isCompleted: !isCompleted })
}

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
})

export const clearCompletedTasks = todos => (
  todos.forEach(({ id }) => firestore.doc(`todos/${id}`).update({ isCompleted: false }))
)
