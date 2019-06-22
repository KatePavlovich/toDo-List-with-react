import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import tasks from './tasks'
import filter from './filters'

export default combineReducers({
  tasks,
  filter,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
