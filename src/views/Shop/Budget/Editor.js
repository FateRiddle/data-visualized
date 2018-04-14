import React from 'react'
import { Modal, Button } from 'antd'
import { connect } from 'react-redux'
import { togglePop_budget } from 'actions/actions'

const Pop = ({ data, title, visible, close, children }) => {
  const handleOK = () => {
    close()
  }

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOK}
      onCancel={close}
      okText="保存"
      cancelText="取消"
      width="50%"
    >
      {children}
    </Modal>
  )
}

const cPop = connect(({ ui }) => ({ visible: ui.budgetPop }), {
  close: togglePop_budget,
})(Pop)

export default cPop
