import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import app from './reducers'

const configureStore = () => {
  const middlewares = [
    thunk,
    promise({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
    }),
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(app, applyMiddleware(...middlewares))

  return store
}

export default configureStore
