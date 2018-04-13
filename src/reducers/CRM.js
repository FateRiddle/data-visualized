import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const filter = (state = { pinp: '', shangpCode: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_CRM':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const list = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_CRM_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const CRM = combineReducers({
  list,
  filter,
})
