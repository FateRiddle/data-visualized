import React from 'react'
import { connect } from 'react-redux'
import { changeCreateForm_shopBudget, getBasicShop } from 'actions/actions'
import { Form, Input, Row, Col } from 'antd'
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
    console.log(formData, 'formData')
    return (
      <Form className="" layout="inline">
        <Row>
          <Col span={8}>
            <Form.Item label="店铺">
              {getFieldDecorator('shop', {
                rules: [{ required: true, message: '必选' }],
              })(
                <SearchSelect
                  style={{ width: 200 }}
                  placeholder="店铺"
                  onChange={this.onShopChange}
                  data={basic.shop}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="年份">
              {getFieldDecorator('year', {
                rules: [{ required: true, message: '必选' }],
              })(
                <Select
                  style={{ width: 150 }}
                  placeholder="年份"
                  onChange={this.onYearChange}
                  data={years}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <div className="b f5 pv3 tracked-mega">预算</div>
        </Row>
        <Row>
          {formData.budget.map((b, index) => (
            <Col span={6} key={index}>
              <Form.Item label={`${index + 1}月`} {...itemLayout}>
                {getFieldDecorator(`budget${index}`, {
                  rules: [
                    { required: true, message: '必填' },
                    // { type: 'number', message: '请填数字' },
                  ],
                  initalValue: b,
                })(
                  <Input
                    onChange={e => this.onBudgetChange(index, e)}
                    placeholder={`${index + 1}月预算`}
                  />
                )}
              </Form.Item>
            </Col>
          ))}
          <Col span={6}>
            <Form.Item label="总预算">
              <div>
                {formData.budget.map(b => convertNum(b)).reduce((a, b) => a + b, 0)} 元
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <div className="b f5 pv3 tracked">销售目标</div>
        </Row>
        <Row>
          {formData.target.map((t, index) => (
            <Col span={6} key={index}>
              <Form.Item label={`${index + 1}月`} {...itemLayout}>
                {getFieldDecorator(`target${index}`, {
                  rules: [
                    { required: true, message: '必填' },
                    // { type: 'number', message: '请填数字' },
                  ],
                })(
                  <Input
                    onChange={e => this.onTargetChange(index, e)}
                    placeholder={`${index + 1}月目标`}
                  />
                )}
              </Form.Item>
            </Col>
          ))}
          <Col span={6}>
            <Form.Item label="总目标">
              <div>
                {formData.target.map(t => convertNum(t)).reduce((a, b) => a + b, 0)} 元
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }

  onShopChange = value => {
    this.props.changeForm({ shop: value })
  }

  onYearChange = value => {
    this.props.changeForm({ year: value })
  }
  onBudgetChange = (index, e) => {
    const { formData, changeForm } = this.props
    let _budget = formData.budget
    _budget[index] = convertNum(e.target.value)
    changeForm({ budget: _budget })
  }
  onTargetChange = (index, e) => {
    const { formData, changeForm } = this.props
    let _target = formData.target
    _target[index] = convertNum(e.target.value)
    changeForm({ target: _target })
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
    // clearForm_shopBudget,
    getBasicShop,
  }
)(CreateForm)

export default cCreateForm

var itemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

var years = new Array(6)
  .fill(0)
  .map((y, i) => ({ value: y + i + 2015, text: y + i + 2015 }))
