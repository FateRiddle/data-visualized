import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'
import { Pop } from 'components'
import CreateForm from './CreateForm'
import EditForm from './EditForm'
import { toggleEditor, createBudget, clearForm_shopBudget } from 'actions/actions'

const Editor = ({ editor, formData, toggleEditor, createBudget, form, clearForm }) => {
  const onCreate = () => {
    let success = false
    form.validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        createBudget(formData)
        clearForm()
        success = true
      }
    })
    return Promise.resolve(success)
  }

  const onToggle = () => {
    toggleEditor()
  }

  // const onEdit = () => {
  //   let success = false
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       editBudget(editData)
  //       clearForm()
  //       success = true
  //     }
  //   })
  //   return Promise.resolve(success)
  // }

  return (
    <Pop
      title="添加店铺预算"
      visible={editor.visible}
      toggle={onToggle}
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
  }),
  {
    toggleEditor,
    createBudget,
    clearForm: clearForm_shopBudget,
  }
)(fEditor)

export default cEditor
