import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const installFilter = (
  state = { shop: '', leim: [], dateFrom: undefined, dateTo: undefined },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FILTER_INSTALL_FEE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const installList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_INSTALL_FEE_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const fee = combineReducers({
  installList,
  installFilter,
})
