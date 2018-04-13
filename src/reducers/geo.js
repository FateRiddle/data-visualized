import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const filter = (
  state = { pinp: '', leim: '', province: '', dateFrom: '', dateTo: '' },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FILTER_GEO':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const list = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_GEO_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const geo = combineReducers({
  list,
  filter,
})
