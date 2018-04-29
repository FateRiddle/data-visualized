import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const filter = (state = { pinp: '箭牌洁具', shangpCode: '' }, action) => {
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
      return action.payload.rows
    default:
      return state
  }
}

const total = (state = 0, action) => {
  if (action.type === 'GET_LIST_CRM_SUCCESS') {
    return action.payload.total
  }
  return state
}

export const CRM = combineReducers({
  list,
  total,
  filter,
})
