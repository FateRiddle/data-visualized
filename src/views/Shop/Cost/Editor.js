import React from 'react'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { Pop } from 'components'
import MyForm from './Form'
import {
  toggleEditor,
  createCost,
  editCost,
  clearForm_shopCost,
  getList_shopCost,
} from 'actions/actions'

const Editor = ({
  isCreate,
  ui,
  formData,
  toggleEditor,
  createCost,
  editCost,
  form,
  clearForm,
  getList,
  filter,
}) => {
  const onCreate = () => {
    form.validateFields((err, values) => {
      if (!err) {
        createCost(formData).then(res => {
          if (res.value.out_Flag === 0) {
            clearForm()
            toggleEditor()
            getList(filter)
          }
          message.info(res.value.out_nszRtn)
        })
      }
    })
  }

  const onEdit = () => {
    form.validateFields((err, values) => {
      if (!err) {
        editCost(formData).then(res => {
          if (res.value.out_Flag === 0) {
            clearForm()
            toggleEditor()
            getList(filter)
          }
          message.info(res.value.out_nszRtn)
        })
      }
    })
  }

  return (
    <Pop
      title={isCreate ? '添加店铺费用' : '修改店铺费用'}
      visible={ui.editor.visible}
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
    ui,
    formData: shop.costForm,
    filter: shop.costFilter,
  }),
  {
    toggleEditor,
    createCost,
    editCost,
    clearForm: clearForm_shopCost,
    getList: getList_shopCost,
  }
)(fEditor)

export default cEditor
