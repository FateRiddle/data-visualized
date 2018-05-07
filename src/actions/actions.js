import api from 'api/api'
import { formatDate, formatLeim } from 'utils/format'

//////// common

export const toggleEditor = () => ({ type: 'TOGGLE_EDITOR' })

export const export_CRM = filter => ({
  type: 'EXCEL_CRM',
  payload: api.CRM.export(filter),
})

///////////shop

////BUDGET

export const changeCreateForm_shopBudget = formData => ({
  type: 'CHANGE_CREATE_FORM_SHOP_BUDGET',
  payload: formData,
})

export const changeEditForm_shopBudget = formData => ({
  type: 'CHANGE_EDIT_FORM_SHOP_BUDGET',
  payload: formData,
})
// 公用吧
export const clearForm_shopBudget = formData => ({
  type: 'CLEAR_FORM_SHOP_BUDGET',
})

export const createBudget = formData => ({
  type: 'CREATE_BUDGET',
  payload: api.Shop.createBudget(formData),
})

export const editBudget = formData => ({
  type: 'EDIT_BUDGET',
  payload: api.Shop.editBudget(formData),
})

///COST

export const changeForm_shopCost = formData => ({
  type: 'CHANGE_FORM_SHOP_COST',
  payload: formData,
})

export const clearForm_shopCost = formData => ({
  type: 'CLEAR_FORM_SHOP_COST',
})

export const createCost = formData => ({
  type: 'CREATE_COST',
  payload: api.Shop.createCost(formData),
})

export const editCost = formData => ({
  type: 'EDIT_COST',
  payload: api.Shop.editCost(formData),
})

//////

export const changeFilter_shopBudget = filter => ({
  type: 'CHANGE_FILTER_SHOP_BUDGET',
  payload: filter,
})

export const getList_shopBudget = filter => ({
  type: 'GET_LIST_SHOP_BUDGET',
  payload: {
    promise: api.Shop.getBudget(filter),
  },
})

export const changeFilter_shopCost = filter => ({
  type: 'CHANGE_FILTER_SHOP_COST',
  payload: filter,
})

export const getList_shopCost = filter => {
  return {
    type: 'GET_LIST_SHOP_COST',
    payload: {
      promise: api.Shop.getCost(filter),
    },
  }
}

export const changeFilter_shopGeneral = filter => ({
  type: 'CHANGE_FILTER_SHOP_GENERAL',
  payload: filter,
})

export const getList_shopGeneral = filter => {
  return {
    type: 'GET_LIST_SHOP_GENERAL',
    payload: {
      promise: api.Shop.getGeneral(filter),
    },
  }
}

//////////inventory

// filter: {pinp:"TOTO"}
export const changeFilter_invDetail = filter => ({
  type: 'CHANGE_FILTER_INV_DETAIL',
  payload: filter,
})

export const getList_invDetail = filter => ({
  type: 'GET_LIST_INV_DETAIL',
  payload: {
    promise: api.Inventory.getDetail(filter),
  },
})

export const changeFilter_invSales = filter => ({
  type: 'CHANGE_FILTER_INV_SALES',
  payload: filter,
})

export const getList_invSales = filter => {
  const { pinp, leim } = filter
  const _leim = formatLeim(leim)
  const _filter = { pinp, leim: _leim }
  return {
    type: 'GET_LIST_INV_SALES',
    payload: {
      promise: api.Inventory.getSales(_filter),
    },
  }
}

///////////// daily
export const changeFilter_daily = filter => ({
  type: 'CHANGE_FILTER_DAILY',
  payload: filter,
})

export const getList_daily = filter => {
  const { shop, dateFrom, dateTo } = filter
  const _dateFrom = formatDate(dateFrom)
  const _dateTo = formatDate(dateTo)
  const _filter = { shop, dateFrom: _dateFrom, dateTo: _dateTo }
  return {
    type: 'GET_LIST_DAILY',
    payload: {
      promise: api.Daily.get(_filter),
    },
  }
}

/////////////// CRM
export const changeFilter_CRM = filter => ({
  type: 'CHANGE_FILTER_CRM',
  payload: filter,
})

export const getList_CRM = filter => ({
  type: 'GET_LIST_CRM',
  payload: {
    promise: api.CRM.get(filter),
  },
})

///////////////Geo
export const changeFilter_geo = filter => ({
  type: 'CHANGE_FILTER_GEO',
  payload: filter,
})

export const getList_geo = filter => {
  const { pinp, leim, dateFrom, dateTo, province } = filter
  const _leim = formatLeim(leim)
  const _dateFrom = formatDate(dateFrom)
  const _dateTo = formatDate(dateTo)
  const _filter = { pinp, leim: _leim, dateFrom: _dateFrom, dateTo: _dateTo, province }
  return {
    type: 'GET_LIST_GEO',
    payload: {
      promise: api.Geo.get(_filter),
    },
  }
}

////////////// Fee
export const changeFilter_installFee = filter => ({
  type: 'CHANGE_FILTER_INSTALL_FEE',
  payload: filter,
})

export const getList_installFee = filter => {
  const { shop, leim, dateFrom, dateTo } = filter
  const _leim = formatLeim(leim)
  const _dateFrom = formatDate(dateFrom)
  const _dateTo = formatDate(dateTo)
  const _filter = { shop, leim: _leim, dateFrom: _dateFrom, dateTo: _dateTo }
  return {
    type: 'GET_LIST_INSTALL_FEE',
    payload: {
      promise: api.Fee.getInstall(_filter),
    },
  }
}

///////////////Service
export const changeFilter_serviceDetail = filter => ({
  type: 'CHANGE_FILTER_SERVICE_DETAIL',
  payload: filter,
})

export const getList_serviceDetail = filter => {
  const { dateFrom, dateTo } = filter
  const _filter = {
    ...filter,
    dateFrom: formatDate(dateFrom),
    dateTo: formatDate(dateTo),
  }
  return {
    type: 'GET_LIST_SERVICE_DETAIL',
    payload: {
      promise: api.Service.getDetail(_filter),
    },
  }
}

export const changeFilter_serviceBasic = filter => ({
  type: 'CHANGE_FILTER_SERVICE_BASIC',
  payload: filter,
})

export const getList_serviceBasic = filter => {
  const { dateFrom, dateTo } = filter
  const _filter = {
    ...filter,
    dateFrom: formatDate(dateFrom),
    dateTo: formatDate(dateTo),
  }
  return {
    type: 'GET_LIST_SERVICE_BASIC',
    payload: {
      promise: api.Service.getBasic(_filter),
    },
  }
}
export const changeFilter_serviceType = filter => ({
  type: 'CHANGE_FILTER_SERVICE_TYPE',
  payload: filter,
})

export const getList_serviceType = filter => {
  const { dateFrom, dateTo } = filter
  const _filter = {
    ...filter,
    dateFrom: formatDate(dateFrom),
    dateTo: formatDate(dateTo),
  }
  return {
    type: 'GET_LIST_SERVICE_TYPE',
    payload: {
      promise: api.Service.getType(_filter),
    },
  }
}

//////////////basic 筛选条件

export const getBasicPinp = () => ({
  type: 'GET_BASIC_PINP',
  payload: {
    promise: api.Filter.pinp(),
  },
})

export const getBasicLeim = () => ({
  type: 'GET_BASIC_LEIM',
  payload: {
    promise: api.Filter.leim(),
  },
})

export const getBasicProvince = () => ({
  type: 'GET_BASIC_PROVINCE',
  payload: {
    promise: api.Filter.province(),
  },
})

export const getBasicShop = () => ({
  type: 'GET_BASIC_SHOP',
  payload: {
    promise: api.Filter.shop(),
  },
})

export const getBasicCompany = () => ({
  type: 'GET_BASIC_COMPANY',
  payload: {
    promise: api.Filter.company(),
  },
})

//////ui

export const asCreate = () => ({ type: 'AS_CREATE' })
export const asEdit = () => ({ type: 'AS_EDIT' })

export const toggleBudgetPop = () => ({ type: 'TOGGLE_BUDGET_POP' })

export const toggleHelper = () => ({ type: 'TOGGLE_HELPER' })
// export const addProject = (title = '', group = []) => (dispatch, getState) => {
//   const data = {
//     id: v4(),
//     title,
//     group,
//     creator: getState().me.id,
//   }
//   return dispatch({
//     type: 'ADD_PROJECT',
//     payload: {
//       promise: api.Projects.add(data),
//       data,
//     },
//   })
// }

// export const addUserToProject = (userId, projectId) => ({
//   type: 'ADD_USER_TO_PROJECT',
//   payload: {
//     userId,
//     id: projectId,
//   },
// })

// export const addTask = projectId => (dispatch, getState) => {
//   const id = v4()
//   const { me } = getState()
//   const isMe = projectId === me.id
//   const data = {
//     id,
//     createdBy: me.id,
//     assignee: isMe ? projectId : '',
//     projectId: isMe ? '' : projectId,
//   }

//   dispatch({
//     type: 'ADD_TASK',
//     payload: {
//       promise: api.Tasks.add(data),
//       data,
//     },
//   })
// }
