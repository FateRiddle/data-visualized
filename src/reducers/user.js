import { combineReducers } from 'redux'

const info = (state = { id: undefined, name: '' }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { result: _info } = action.payload
      if (_info.out_Flag === 0) {
        return { id: _info.out_yonghID, name: _info.out_yonghName || '' }
      }
      return state
    case 'SYNC_USER':
      return { id: action.payload.userId, name: action.payload.userName }
    default:
      return state
  }
}

const sessionEnd = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return false
    case 'AUTH_SUCCESS':
      return action.payload.result.out_Flag === 1
    default:
      return state
  }
}

const auth = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.rows || []
    case 'AUTH_SUCCESS':
      return action.payload.rows || []
    case 'CLEAR_AUTH':
      return []
    default:
      return state
  }
}

export const user = combineReducers({ info, auth, sessionEnd })
