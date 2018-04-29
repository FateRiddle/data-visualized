import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'
import { Pop } from 'components'
import MyForm from './Form'
import { toggleEditor, createCost, editCost, clearForm_shopCost } from 'actions/actions'

const Editor = ({
  isCreate,
  editor,
  formData,
  toggleEditor,
  createCost,
  editCost,
  form,
  clearForm,
}) => {
  const onCreate = () => {
    let success = false
    form.validateFields((err, values) => {
      if (!err) {
        createCost(formData)
        clearForm()
        success = true
      }
    })
    return Promise.resolve(success)
  }

  const onEdit = () => {
    let success = false
    form.validateFields((err, values) => {
      if (!err) {
        editCost(formData)
        clearForm()
        success = true
      }
    })
    return Promise.resolve(success)
  }

  return (
    <Pop
      title="添加店铺预算"
      visible={editor.visible}
      toggle={toggleEditor}
      submit={isCreate ? onCreate : onEdit}
    >
      <MyForm form={form} />
    </Pop>
  )
}

const fEditor = Form.create({
  mapPropsToFields: ({ formData }) => {
    return {
      shop: Form.createFormField({ value: formData.shop }),
      year: Form.createFormField({ value: formData.year }),
      month: Form.createFormField({ value: formData.month }),
      ///// tm
      zuanz: Form.createFormField({ value: formData.zuanz }),
      zhitc: Form.createFormField({ value: formData.zhitc }),
      juhs: Form.createFormField({ value: formData.juhs }),
      pinxb: Form.createFormField({ value: formData.pinxb }),
      taobk: Form.createFormField({ value: formData.taobk }),
      tmqit: Form.createFormField({ value: formData.tmqit }),
      //// jd
      pinpjx: Form.createFormField({ value: formData.pinpjx }),
      jdkc: Form.createFormField({ value: formData.jdkc }),
      jdms: Form.createFormField({ value: formData.jdms }),
      jtk: Form.createFormField({ value: formData.jtk }),
      jdqit: Form.createFormField({ value: formData.jdqit }),
      ////净销售额
      jxsSum: Form.createFormField({ value: formData.jxsSum }),
    }
  },
})(Editor)

const cEditor = connect(
  ({ ui, shop }) => ({
    editor: ui.editor,
    formData: shop.costForm,
  }),
  {
    toggleEditor,
    createCost,
    editCost,
    clearForm: clearForm_shopCost,
  }
)(fEditor)

export default cEditor
