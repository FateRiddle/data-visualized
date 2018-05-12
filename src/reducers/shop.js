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

const initialBudgetForm = {
  shop: '',
  year: '',
  month: '',
  ys: '',
  xiaosmb: '',
  cangcfratio: '',
  anzwxSum: '',
  yunfratio: '',
  rengSum: '',
}

const budgetCreateForm = (state = initialBudgetForm, action) => {
  switch (action.type) {
    case 'CHANGE_CREATE_FORM_SHOP_BUDGET':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_BUDGET':
      return initialBudgetForm
    default:
      return state
  }
}

const budgetEditForm = (state = initialBudgetForm, action) => {
  switch (action.type) {
    case 'CHANGE_EDIT_FORM_SHOP_BUDGET':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_BUDGET':
      return initialBudgetForm
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

const initialCostForm = {
  shop: '',
  year: '',
  month: '',
  zuanz: 0,
  zhitc: 0,
  juhs: 0,
  pinxb: 0,
  taobk: 0,
  tmqit: 0,
  pinpjx: 0,
  jdkc: 0,
  jdms: 0,
  jtk: 0,
  jdqit: 0,
  jxsSum: 0,
}

const costForm = (state = initialCostForm, action) => {
  switch (action.type) {
    case 'CHANGE_FORM_SHOP_COST':
      return { ...state, ...action.payload }
    case 'CLEAR_FORM_SHOP_COST':
      return initialCostForm
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
