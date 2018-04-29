import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'
import { Pop } from 'components'
import EditForm from './EditForm'
import { convertNum } from 'utils'
import { toggleEditor, editBudget, clearForm_shopBudget } from 'actions/actions'

const Editor = ({ editor, formData, toggleEditor, editBudget, form, clearForm }) => {
  const onEdit = () => {
    let success = false
    form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        editBudget(formData)
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
      submit={onEdit}
      width="400px"
    >
      <EditForm form={form} />
    </Pop>
  )
}

const fEditor = Form.create({
  mapPropsToFields: ({ formData }) => ({
    budget: Form.createFormField({ value: formData.budget }),
    target: Form.createFormField({ value: formData.target }),
  }),
})(Editor)

const cEditor = connect(
  ({ ui, shop }) => ({
    editor: ui.editor,
    formData: shop.budgetEditForm,
  }),
  {
    toggleEditor,
    editBudget,
    clearForm: clearForm_shopBudget,
  }
)(fEditor)

export default cEditor
