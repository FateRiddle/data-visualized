import api from 'api/api'

//////////inventory

// filter: {pinp:"TOTO"}
export const changeFilter_invDetail = filter => {
  return {
    type: 'CHANGE_FILTER_INV_DETAIL',
    payload: filter,
  }
}
export const getList_invDetail = filter => {
  return {
    type: 'GET_LIST_INV_DETAIL',
    payload: {
      promise: api.Inventory.getDetail(filter),
    },
  }
}

export const changeFilter_invSales = filter => {
  return {
    type: 'CHANGE_FILTER_INV_SALES',
    payload: filter,
  }
}
export const getList_invSales = filter => {
  return {
    type: 'GET_LIST_INV_SALES',
    payload: {
      promise: api.Inventory.getSales(filter),
    },
  }
}

/////////////// CRM
export const changeFilter_CRM = filter => {
  return {
    type: 'CHANGE_FILTER_CRM',
    payload: filter,
  }
}
export const getList_CRM = filter => {
  return {
    type: 'GET_LIST_CRM',
    payload: {
      promise: api.Customer.get(filter),
    },
  }
}

///////////////Geo
export const changeFilter_geo = filter => {
  return {
    type: 'CHANGE_FILTER_GEO',
    payload: filter,
  }
}
export const getList_geo = filter => {
  return {
    type: 'GET_LIST_GEO',
    payload: {
      promise: api.Geo.get(filter),
    },
  }
}

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
