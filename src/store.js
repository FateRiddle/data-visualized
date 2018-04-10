import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'

const reducer = (state = {}, action) => ({})

const store = createStore(reducer, applyMiddleware(logger))

export default store
