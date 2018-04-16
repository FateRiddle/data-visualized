import api from 'api/api'

///////////shop

export const createBudget = data => ({
  type: 'CREATE_BUDGET',
  payload: data, // it will be a promise
})

export const editBudget = data => ({
  type: 'EDIT_BUDGET',
  payload: data,
})

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

export const getList_invSales = filter => ({
  type: 'GET_LIST_INV_SALES',
  payload: {
    promise: api.Inventory.getSales(filter),
  },
})

/////////////// CRM
export const changeFilter_CRM = filter => ({
  type: 'CHANGE_FILTER_CRM',
  payload: filter,
})

export const getList_CRM = filter => ({
  type: 'GET_LIST_CRM',
  payload: {
    promise: api.Customer.get(filter),
  },
})

///////////////Geo
export const changeFilter_geo = filter => ({
  type: 'CHANGE_FILTER_GEO',
  payload: filter,
})

export const getList_geo = filter => ({
  type: 'GET_LIST_GEO',
  payload: {
    promise: api.Geo.get(filter),
  },
})

//////////////basic

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

//////ui
export const toggleBudgetPop = () => ({ type: 'TOGGLE_BUDGET_POP' })

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
