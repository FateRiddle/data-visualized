import React from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
// import { togglePop_budget } from 'actions/actions'

const Pop = ({
  title,
  initValues = {},
  visible,
  toggle,
  submit,
  children,
  width = '900px',
  footer,
}) => {
  const handleOK = () => {
    submit().then(success => {
      if (success) {
        toggle()
      }
    })
  }

  let props = {
    title,
    visible,
    onOk: handleOK,
    onCancel: toggle,
    width,
    destroyOnClose: true,
    okText: '保存',
    cancelText: '取消',
  }
  // 如果有footer设定，用设定的footer
  if (footer !== undefined) {
    props = { ...props, footer }
  }

  return <Modal {...props}>{children}</Modal>
}

export default Pop
