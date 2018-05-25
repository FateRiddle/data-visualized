import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Divider } from 'antd'
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
        <Row>
          <Col span={12}>
            <Form.Item label="店铺" {...itemLayout}>
              <div>{formData.shop}</div>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="年月" {...itemLayout}>
              <div>
                {formData.year}/{formData.month}
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
            <Form.Item label="仓储费占比（%）" {...itemLayout}>
              {getFieldDecorator('cangcfratio', {
                rules: [
                  { required: true, message: '必填' },
                  { validator: validatePercent },
                ],
              })(
                <Input
                  onChange={e => this.onFieldChange('cangcfratio', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="安装维修费（%）" {...itemLayout}>
              {getFieldDecorator('anzwxSum', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  onChange={e => this.onFieldChange('anzwxSum', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="运费占比（%）" {...itemLayout}>
              {getFieldDecorator('yunfratio', {
                rules: [
                  { required: true, message: '必填' },
                  { validator: validatePercent },
                ],
              })(
                <Input
                  onChange={e => this.onFieldChange('yunfratio', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="人工费占比（%）" {...itemLayout}>
              {getFieldDecorator('rengSum', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  onChange={e => this.onFieldChange('rengSum', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="平台费占比（%）" {...itemLayout}>
              {getFieldDecorator('pingtfratio', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  onChange={e => this.onFieldChange('pingtfratio', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="信息部占比（%）" {...itemLayout}>
              {getFieldDecorator('xinxbratio', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  onChange={e => this.onFieldChange('xinxbratio', e.target.value)}
                  placeholder="请填百分比，如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
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
          </Col>
        </Row>
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

// var headLayout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 12 },
// }

var itemLayout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 12 },
}

var validatePercent = (rule, value, callback) => {
  if (value < 100) {
    callback()
  } else {
    callback('必须是0至100之间')
  }
}
