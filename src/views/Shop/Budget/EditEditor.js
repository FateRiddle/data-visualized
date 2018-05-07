import React from 'react'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { Pop } from 'components'
import EditForm from './EditForm'
import {
  toggleEditor,
  editBudget,
  clearForm_shopBudget,
  getList_shopBudget,
} from 'actions/actions'

const Editor = ({
  editor,
  formData,
  toggleEditor,
  editBudget,
  form,
  clearForm,
  getList,
  filter,
}) => {
  const onEdit = () => {
    form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        editBudget(formData).then(res => {
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
      title="修改店铺预算"
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
    filter: shop.budgetFilter,
  }),
  {
    toggleEditor,
    editBudget,
    clearForm: clearForm_shopBudget,
    getList: getList_shopBudget,
  }
)(fEditor)

export default cEditor
