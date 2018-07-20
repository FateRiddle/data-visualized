import { combineReducers } from 'redux'

// {
//   filter:{shop,dateFrom,dateTo},
//   list:[]
// }

const filter = (state = { shop: '', dateFrom: undefined, dateTo: undefined }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_DAILY':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const list = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_DAILY_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const form = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FORM_DAILY':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_DAILY':
      return []
    default:
      return state
  }
}

export const daily = combineReducers({
  list,
  filter,
  form,
})
