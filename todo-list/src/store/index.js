import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase'
import reducers from '../reducers'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // eslint-disable-next-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  })
  : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  // reduxFirestore(FirebaseConfig), reactReduxFirebase(FirebaseConfig),
)

const configureStore = preloadedState => (createStore(reducers, preloadedState, enhancer))

const store = configureStore({})


export default store
