import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Page } from 'components'
import queryString from 'query-string'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const Shop = ({ location, dispatch, user, loading }) => {
  location.query = queryString.parse(location.search)
  const { query, pathname } = location
  const {
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType,
    isMotion,
    selectedRowKeys,
  } = user

  const handleRefresh = newQuery => {
    // dispatch(
    //   routerRedux.push({
    //     pathname,
    //     search: queryString.stringify({
    //       ...query,
    //       ...newQuery,
    //     }),
    //   })
    // )
  }

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['user/update'],
    title: `${modalType === 'create' ? 'Create User' : 'Update User'}`,
    wrapClassName: 'vertical-center-modal',
    onOk(data) {
      dispatch({
        type: `user/${modalType}`,
        payload: data,
      }).then(() => {
        handleRefresh()
      })
    },
    onCancel() {
      dispatch({
        type: 'user/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['user/query'],
    pagination,
    location,
    isMotion,
    onChange(page) {
      // handleRefresh({
      //   page: page.current,
      //   pageSize: page.pageSize,
      // })
    },
    onDeleteItem(id) {
      // dispatch({
      //   type: 'user/delete',
      //   payload: id,
      // }).then(() => {
      //   handleRefresh({
      //     page:
      //       list.length === 1 && pagination.current > 1
      //         ? pagination.current - 1
      //         : pagination.current,
      //   })
      // })
    },
    onEditItem(item) {
      // dispatch({
      //   type: 'user/showModal',
      //   payload: {
      //     modalType: 'update',
      //     currentItem: item,
      //   },
      // })
    },
    rowSelection: {
      selectedRowKeys,
      onChange: keys => {
        dispatch({
          type: 'user/updateState',
          payload: {
            selectedRowKeys: keys,
          },
        })
      },
    },
  }

  const filterProps = {
    isMotion,
    filter: {
      ...query,
    },
    onFilterChange(value) {
      handleRefresh({
        ...value,
        page: 1,
      })
    },
    onAdd() {
      dispatch({
        type: 'user/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion() {
      dispatch({ type: 'user/switchIsMotion' })
    },
  }

  const handleDeleteItems = () => {
    dispatch({
      type: 'user/multiDelete',
      payload: {
        ids: selectedRowKeys,
      },
    }).then(() => {
      handleRefresh({
        page:
          list.length === selectedRowKeys.length && pagination.current > 1
            ? pagination.current - 1
            : pagination.current,
      })
    })
  }

  return (
    <Page inner>
      <Filter {...filterProps} />
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </Page>
  )
}

Shop.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ user, loading }) => ({ user, loading }))(Shop)
