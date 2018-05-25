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
    const fields = {
      shop: Form.createFormField({ value: formData.shop }),
      year: Form.createFormField({ value: formData.year }),
    }

    formData.budget.forEach((b, idx) => {
      fields[`budget${idx}`] = Form.createFormField({ value: b })
    })

    formData.target.forEach((t, idx) => {
      fields[`target${idx}`] = Form.createFormField({ value: t })
    })

    return fields
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
