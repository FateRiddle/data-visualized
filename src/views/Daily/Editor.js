import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { Pop } from 'components'
import EditForm from './Form'
import { toggleEditor, editDaily, clearForm_daily, getList_daily } from 'actions/actions'

const Editor = ({
  editor,
  formData,
  toggleEditor,
  editDaily,
  form,
  clearForm,
  getList,
  filter,
}) => {
  const onEdit = () => {
    form.validateFields((err, values) => {
      console.log(err, values, formData)
      if (!err) {
        editDaily(formData).then(res => {
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
      title="修改每日数据"
      visible={editor.visible}
      toggle={toggleEditor}
      submit={onEdit}
      width="1500px"
    >
      <EditForm form={form} />
    </Pop>
  )
}

const enhance = compose(
  //redux
  connect(
    ({ ui, daily }) => ({
      editor: ui.editor,
      formData: daily.form,
      filter: daily.filter,
    }),
    {
      toggleEditor,
      editDaily,
      clearForm: clearForm_daily,
      getList: getList_daily,
    }
  ),
  // antd form
  Form.create({
    mapPropsToFields: ({ formData }) => {
      const fields = {}
      for (let key in formData) {
        fields[key] = Form.createFormField({ value: formData[key] })
      }
      return fields
    },
  })
)

export default enhance(Editor)
