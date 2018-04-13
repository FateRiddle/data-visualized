import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const detailFilter = (state = { pinp: '', shangpCode: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_INV_DETAIL':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const detailList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_INV_DETAIL_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const salesFilter = (state = { pinp: '', leim: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_INV_SALES':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const salesList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_INV_SALES_SUCCESS':
      return action.payload
        ? action.payload.map(p => ({
            ...p,
            cost: p.cehngbSum, //后台写错拼音
          }))
        : state
    default:
      return state
  }
}

export const inventory = combineReducers({
  detailList,
  detailFilter,
  salesList,
  salesFilter,
})
