import { combineReducers } from 'redux'

// {
//   filter:{pinp,leim},
//   list:[]
// }

const budgetFilter = (state = { shop: '', year: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SHOP_BUDGET':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const budgetList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SHOP_BUDGET_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const budgetCreateForm = (
  state = {
    shop: '',
    year: '',
    budget: new Array(12).fill(''),
    target: new Array(12).fill(''),
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_CREATE_FORM_SHOP_BUDGET':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_BUDGET':
      return {
        shop: '',
        year: '',
        budget: new Array(12).fill(''),
        target: new Array(12).fill(''),
      }
    default:
      return state
  }
}

const budgetEditForm = (state = { id: '', budget: '', target: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_EDIT_FORM_SHOP_BUDGET':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_BUDGET':
      return { id: '', budget: '', target: '' }
    default:
      return state
  }
}

const costFilter = (state = { shop: '', year: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SHOP_COST':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const costList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SHOP_COST_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const costForm = (
  state = {
    shop: '',
    year: '',
    month: '',
    zuanz: '',
    zhitc: '',
    juhs: '',
    pinxb: '',
    taobk: '',
    tmqit: '',
    pinpjx: '',
    jdkc: '',
    jdms: '',
    jtk: '',
    jdqit: '',
    jxsSum: '',
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_FORM_SHOP_COST':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_COST':
      return {
        shop: '',
        year: '',
        month: '',
        zuanz: '',
        zhitc: '',
        juhs: '',
        pinxb: '',
        taobk: '',
        tmqit: '',
        pinpjx: '',
        jdkc: '',
        jdms: '',
        jtk: '',
        jdqit: '',
        jxsSum: '',
      }
    default:
      return state
  }
}

const generalFilter = (state = { shop: '', year: '', month: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_SHOP_GENERAL':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const generalList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SHOP_GENERAL_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const shop = combineReducers({
  budgetList,
  budgetFilter,
  budgetCreateForm,
  budgetEditForm,
  costList,
  costFilter,
  costForm,
  generalFilter,
  generalList,
})
