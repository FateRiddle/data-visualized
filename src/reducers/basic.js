import { combineReducers } from 'redux'

const pinp = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_PINP_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.pinpName, text: d.pinpName }))
        : state
    default:
      return state
  }
}

const leim = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_LEIM_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.pinpName, text: d.pinpName }))
        : state
    default:
      return state
  }
}

const province = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_PROVINCE_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.province, text: d.province }))
        : state
    default:
      return state
  }
}

export const basic = combineReducers({ pinp, leim, province })
