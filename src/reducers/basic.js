import { combineReducers } from 'redux'
import formatLeim from 'utils/leim'

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
      return action.payload ? formatLeim(action.payload) : state
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

const shop = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_SHOP_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.sellerNick, text: d.sellerNick }))
        : state
    default:
      return state
  }
}

const serviceShop = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_SHOP_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.orgName, text: d.orgName }))
        : state
    default:
      return state
  }
}

const company = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASIC_COMPANY_SUCCESS':
      return action.payload
        ? action.payload.map(d => ({ value: d.gongsName, text: d.gongsName }))
        : state
    default:
      return state
  }
}

export const basic = combineReducers({ pinp, leim, province, shop, serviceShop, company })
