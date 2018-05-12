import React from 'react'
import { connect } from 'react-redux'
import { changeEditForm_shopBudget, getBasicShop } from 'actions/actions'
import { Form, Input } from 'antd'
import { convertNum } from 'utils'
// import { Select } from 'components'

class EditForm extends React.Component {
  componentDidMount() {
    this.props.getBasicShop()
    // this.props.form.setFieldsValue({

    // })
  }

  render() {
    // form is passed from above, so the submit button can share the same form
    const { formData } = this.props
    const { getFieldDecorator } = this.props.form
    console.log(formData, 'formData')
    return (
      <Form className="">
        <Form.Item label="店铺" {...itemLayout}>
          <div>{formData.shop}</div>
        </Form.Item>
        <Form.Item label="年月" {...itemLayout}>
          <div>
            {formData.year}/{formData.month}
          </div>
        </Form.Item>
        <Form.Item label="推广费预算" {...itemLayout}>
          {getFieldDecorator('ys', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('ys', e.target.value)}
              placeholder="预算"
            />
          )}
        </Form.Item>
        <Form.Item label="推广费预算" {...itemLayout}>
          {getFieldDecorator('ys', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('ys', e.target.value)}
              placeholder="预算"
            />
          )}
        </Form.Item>
        <Form.Item label="推广费预算" {...itemLayout}>
          {getFieldDecorator('ys', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('ys', e.target.value)}
              placeholder="预算"
            />
          )}
        </Form.Item>
        <Form.Item label="推广费预算" {...itemLayout}>
          {getFieldDecorator('ys', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('ys', e.target.value)}
              placeholder="预算"
            />
          )}
        </Form.Item>
        <Form.Item label="推广费预算" {...itemLayout}>
          {getFieldDecorator('ys', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('ys', e.target.value)}
              placeholder="预算"
            />
          )}
        </Form.Item>
        <Form.Item label="销售目标" {...itemLayout}>
          {getFieldDecorator('xiaosmb', {
            rules: [{ required: true, message: '必填' }],
          })(
            <Input
              onChange={e => this.onFieldChange('xiaosmb', e.target.value)}
              placeholder="销售目标"
            />
          )}
        </Form.Item>
      </Form>
    )
  }

  onFieldChange = (key, value) => {
    this.props.changeForm({ [key]: convertNum(value) })
  }
}

const cEditForm = connect(
  ({ shop, ui, basic }) => ({
    formData: shop.budgetEditForm,
    editor: ui.editor,
    basic,
  }),
  {
    changeForm: changeEditForm_shopBudget,
    getBasicShop,
  }
)(EditForm)

export default cEditForm

var itemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

// var years = new Array(6)
//   .fill(0)
//   .map((y, i) => ({ value: y + i + 2015, text: y + i + 2015 }))
