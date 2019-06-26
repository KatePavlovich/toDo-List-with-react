/* eslint-disable consistent-return */
// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
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
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

window.firebase = firebase

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName, email, photoURL, createdAt, ...additionalData,
      })
    } catch (error) {
      console.error('Error creating user', error.message)
    }
  }
  return getUserDocument(user.uid)
}

export const getUserDocument = async (uid) => {
  if (!uid) return null

  try {
    const userDocument = await firestore.collection('users').doc(uid)

    return { uid, ...userDocument.data }
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
}
// const databaseRef = firebase.database().ref()
// const todosRef = databaseRef.child('todos')
// export default todosRef

export default firebase
