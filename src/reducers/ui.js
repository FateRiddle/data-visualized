import { combineReducers } from 'redux'

export const loading = (state = false, action) => {
  if (action.type.endsWith('_LOADING')) {
    return true
  }
  if (action.type.endsWith('_SUCCESS') || action.type.endsWith('_FAILURE')) {
    return false
  }
  return state
}

const budgetPop = (state = false, action) => {
  if (action.type === 'TOGGLE_POP_BUDGET') {
    return !state
  }
  return state
}

export const ui = combineReducers({ budgetPop })
