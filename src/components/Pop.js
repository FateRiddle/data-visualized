import React from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
// import { togglePop_budget } from 'actions/actions'

const Pop = ({ title, initValues = {}, visible, toggle, submit, children }) => {
  const handleOK = () => {
    submit()
    toggle()
  }

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOK}
      onCancel={toggle}
      okText="保存"
      cancelText="取消"
      width="50%"
    >
      {children}
    </Modal>
  )
}

export default Pop
