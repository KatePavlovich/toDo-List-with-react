// import todosRef from 'firebase'
import {
  ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER, CLEAR_COMPLETED_TASKS,
  FETCH_TASKS, CREATE_TASK_ERR,
} from '../constants'
import { firestore } from '../config/firebase'


export const fetchToDos = () => async (dispatch) => {
  await firestore.collection('todos').onSnapshot((snapShot) => {
    const todos = snapShot.docs.map((doc) => {
      console.log('doc', doc)
      return ({ id: doc.id, ...doc.data() })
    })
    console.log('object', todos)
    return dispatch({
      type: FETCH_TASKS,
      todos,
    })
  })
}

// export const addTask = ({ id, text, isCompleted }) => ({
//   type: ADD_TASK,
//   id,
//   text,
//   isCompleted,
// })

export const addTask = newToDo => (dispatch, getState) => {
  firestore.collection('todos').add({ ...newToDo }).then(() => { dispatch({ type: ADD_TASK, newToDo }) }).catch((err) => { dispatch({ type: CREATE_TASK_ERR, err }) })

  // todosRef.push().set(newToDo)
}

export const deleteTask = id => async (dispatch) => {
  console.log('id', id)
  firestore.doc(`todos/${id}`).delete().then(() => { dispatch({ type: DELETE_TASK, id }) }).catch((err) => { dispatch({ type: CREATE_TASK_ERR, err }) })
  // todosRef.child(completeToDoId).remove()
}

// export const deleteTask = id => ({
//   type: DELETE_TASK,
//   id,
// })

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


// export const addTask = newToDo => (dispatch, getState, { getFirebase, getFirestore }) => {
//   const firestore = getFirestore()
// eslint-disable-next-line max-len
//   firestore.collection('todos').add({ ...newToDo }).then(() => { dispatch({ type: ADD_TASK, newToDo }) }).catch((err) => { dispatch({ type: CREATE_TASK_ERR, err }) })

//   // todosRef.push().set(newToDo)
// }
// export const completeTask = completeToDoId => async (dispatch) => {
//   todosRef.child(completeToDoId).remove()
// }
