// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import { FirebaseConfig } from './keys'
const FirebaseConfig = {
  apiKey: 'AIzaSyArNiRrYTOBzP0Fdfg1-rzDSOL7Y-K_qGs',
  authDomain: 'todo-app-51f88.firebaseapp.com',
  databaseURL: 'https://todo-app-51f88.firebaseio.com',
  projectId: 'todo-app-51f88',
  storageBucket: 'todo-app-51f88.appspot.com',
  messagingSenderId: '699994316810',
  appId: '1:699994316810:web:006db44b4b6cfb04',
}

firebase.initializeApp(FirebaseConfig)

export const firestore = firebase.firestore()


window.firebase = firebase
// const databaseRef = firebase.database().ref()
// const todosRef = databaseRef.child('todos')
// export default todosRef

export default firebase
