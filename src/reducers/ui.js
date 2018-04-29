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

const editor = (state = { visible: false, isCreate: true }, action) => {
  switch (action.type) {
    case 'AS_CREATE':
      return { ...state, isCreate: true }
    case 'AS_EDIT':
      return { ...state, isCreate: false }
    case 'TOGGLE_EDITOR':
      return { ...state, visible: !state.visible }
    default:
      return state
  }
}

const helper = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_HELPER':
      return !state
    default:
      return state
  }
}

const confirmPop = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CONFIRM':
      return !state
    default:
      return state
  }
}

export const ui = combineReducers({ editor, confirmPop, helper })
