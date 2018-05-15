import React from 'react'
import { connect } from 'react-redux'
import { changeCreateForm_shopBudget, getBasicShop } from 'actions/actions'
import { Form, Input, Row, Col, Divider } from 'antd'
import { SearchSelect, Select } from 'components'
import { convertNum } from 'utils'

class CreateForm extends React.Component {
  componentDidMount() {
    this.props.getBasicShop()
    // this.props.form.setFieldsValue({

    // })
  }

  render() {
    // form is passed from above, so the submit button can share the same form
    const { formData, basic } = this.props
    const { getFieldDecorator } = this.props.form
    // console.log(formData, 'formData')
    return (
      <Form className="">
        <Row>
          <Col span={8}>
            <Form.Item label="店铺" {...headLayout}>
              {getFieldDecorator('shop', {
                rules: [
                  {
                    required: true,
                    message: '必选',
                  },
                ],
              })(
                <SearchSelect
                  style={{ width: 200 }}
                  placeholder="店铺"
                  onChange={v => this.onFieldChange('shop', v)}
                  data={basic.shop}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="年份" {...headLayout}>
              {getFieldDecorator('year', {
                rules: [{ required: true, message: '必选' }],
              })(
                <Select
                  placeholder="年份"
                  onChange={v => this.onFieldChange('year', v)}
                  data={years}
                />
              )}
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="月份" {...headLayout}>
              {getFieldDecorator('month', {
                rules: [
                  {
                    required: true,
                    message: '必选',
                  },
                ],
              })(
                <Select
                  placeholder="月份"
                  onChange={v => this.onFieldChange('month', v)}
                  data={months}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={10}>
            <Form.Item label="推广费预算" {...itemLayout}>
              {getFieldDecorator('ys', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                ],
              })(
                <Input
                  onChange={e => this.onNumberChange('ys', e.target.value)}
                  placeholder="推广费"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="仓储费占比（%）" {...itemLayout}>
              {getFieldDecorator('cangcfratio', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                  {
                    validator: validatePercent,
                  },
                ],
              })(
                <Input
                  onChang={e => this.onNumberChange('cangcfratio', e.target.value)}
                  placeholder="填百分比，例如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item label="安装维修费" {...itemLayout}>
              {getFieldDecorator('anzwxSum', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                ],
              })(
                <Input
                  onChang={e => this.onNumberChange('anzwxSum', e.target.value)}
                  placeholder="安装维修费"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="运费占比（%）" {...itemLayout}>
              {getFieldDecorator('yunfratio', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                  {
                    validator: validatePercent,
                  },
                ],
              })(
                <Input
                  onChange={e => this.onNumberChange('yunfratio', e.target.value)}
                  placeholder="填百分比，例如50"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item label="人工费" {...itemLayout}>
              {getFieldDecorator('rengSum', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                ],
              })(
                <Input
                  onChange={e => this.onNumberChange('rengSum', e.target.value)}
                  placeholder="人工费"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={10}>
            <Form.Item label="销售目标" {...itemLayout}>
              {getFieldDecorator('xiaosmb', {
                rules: [
                  {
                    required: true,
                    message: '必填',
                  },
                ],
              })(
                <Input
                  onChange={e => this.onNumberChange('xiaosmb', e.target.value)}
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
    this.props.changeForm({
      [key]: value,
    })
  }

  onNumberChange = (key, value) => {
    this.props.changeForm({
      [key]: convertNum(value),
    })
  }
}

const cCreateForm = connect(
  ({ shop, ui, basic }) => ({
    formData: shop.budgetCreateForm,
    editor: ui.editor,
    basic,
  }),
  {
    changeForm: changeCreateForm_shopBudget,
    getBasicShop,
  }
)(CreateForm)

export default cCreateForm

var headLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
}

var itemLayout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 12,
  },
}

var years = new Array(6).fill(0).map((y, i) => ({
  value: i + 2015,
  text: i + 2015,
}))

var months = new Array(12).fill(0).map((y, i) => ({
  value: i + 1,
  text: i + 1,
}))

var validatePercent = (rule, value, callback) => {
  if (value < 100) {
    callback()
  } else {
    callback('必须是0至100之间')
  }
}
