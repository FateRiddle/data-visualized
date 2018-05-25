import React from 'react'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { Pop } from 'components'
import CreateForm from './CreateForm'
import {
  toggleEditor,
  createBudget,
  clearForm_shopBudget,
  getList_shopBudget,
} from 'actions/actions'

const Editor = ({
  editor,
  formData,
  toggleEditor,
  createBudget,
  form,
  clearForm,
  getList,
  filter,
}) => {
  const onCreate = () => {
    form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        createBudget(formData).then(res => {
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
      title="添加店铺预算"
      visible={editor.visible}
      toggle={toggleEditor}
      submit={onCreate}
    >
      <CreateForm form={form} />
    </Pop>
  )
}

const fEditor = Form.create({
  mapPropsToFields: ({ formData }) => {
    return {
      shop: Form.createFormField({ value: formData.shop }),
      year: Form.createFormField({ value: formData.year }),
      month: Form.createFormField({ value: formData.month }),
      ys: Form.createFormField({ value: formData.ys }),
      cangcfratio: Form.createFormField({ value: formData.cangcfratio }),
      anzwxSum: Form.createFormField({ value: formData.anzwxSum }),
      yunfratio: Form.createFormField({ value: formData.yunfratio }),
      rengSum: Form.createFormField({ value: formData.rengSum }),
      pingtfratio: Form.createFormField({ value: formData.pingtfratio }),
      xinxbratio: Form.createFormField({ value: formData.xinxbratio }),
      xiaosmb: Form.createFormField({ value: formData.xiaosmb }),
    }
  },
})(Editor)

const cEditor = connect(
  ({ ui, shop }) => ({
    editor: ui.editor,
    formData: shop.budgetCreateForm,
    filter: shop.budgetFilter,
  }),
  {
    toggleEditor,
    createBudget,
    clearForm: clearForm_shopBudget,
    getList: getList_shopBudget,
  }
)(fEditor)

export default cEditor
