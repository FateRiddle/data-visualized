import { combineReducers } from 'redux'

const basicFilter = (
  state = { shop: '', company: '', dateFrom: undefined, dateTo: undefined },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SERVICE_BASIC':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const basicList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SERVICE_BASIC_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const detailFilter = (
  state = { shop: '', company: '', dateFrom: undefined, dateTo: undefined },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SERVICE_DETAIL':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const detailList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SERVICE_DETAIL_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const typeFilter = (
  state = { shop: '', company: '', dateFrom: undefined, dateTo: undefined },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SERVICE_TYPE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const typeList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SERVICE_TYPE_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const service = combineReducers({
  basicList,
  basicFilter,
  detailList,
  detailFilter,
  typeFilter,
  typeList,
})
