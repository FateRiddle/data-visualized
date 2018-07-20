import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'antd'
import { changeForm_shopCost, getBasicShop } from 'actions/actions'
import { Form, Input, Row, Col } from 'antd'
import { SearchSelect, Select } from 'components'
import { convertNum } from 'utils'
// import moment from 'moment'

class MyForm extends React.Component {
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
    const {
      zuanz,
      zhitc,
      juhs,
      pinxb,
      taobk,
      tmqit,
      pinpjx,
      jdkc,
      jdms,
      jtk,
      jdqit,
    } = formData
    const tmSum =
      convertNum(zuanz) +
      convertNum(zhitc) +
      convertNum(juhs) +
      convertNum(pinxb) +
      convertNum(taobk) +
      convertNum(tmqit)
    const jdSum =
      convertNum(pinpjx) +
      convertNum(jdkc) +
      convertNum(jdms) +
      convertNum(jtk) +
      convertNum(jdqit)
    return (
      <Form className="">
        <Row>
          <Col span={8}>
            <Form.Item label="店铺" {...itemLayout}>
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
          <Col span={6}>
            <Form.Item label="年" {...itemLayout}>
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

          <Col span={6}>
            <Form.Item label="月" {...itemLayout}>
              {getFieldDecorator('month', {
                rules: [{ required: true, message: '必选' }],
              })(
                <Select
                  style={{ width: 150 }}
                  placeholder="月份"
                  onChange={this.onMonthChange}
                  data={months}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row>
          <div className="mb3 ml2 b">天猫广宣费: {tmSum ? tmSum : 0} 元</div>
        </Row>
        <Row>
          {tmFields.map((tm, index) => (
            <Col span={8} key={index}>
              <Form.Item label={tm.field} {...itemLayout}>
                {getFieldDecorator(tm.value, {
                  rules: [
                    { required: true, message: '必填' },
                    // { type: 'number', message: '请填数字' },
                  ],
                })(
                  <Input
                    onChange={e => this.onFieldChange(tm.value, e)}
                    placeholder={tm.field}
                  />
                )}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <Divider />
        <Row>
          <div className="mb3 ml2 b">京东广宣费: {jdSum ? jdSum : 0} 元</div>
        </Row>
        <Row>
          {jdFields.map((jd, index) => (
            <Col span={8} key={index}>
              <Form.Item label={jd.field} {...itemLayout}>
                {getFieldDecorator(jd.value, {
                  rules: [
                    { required: true, message: '必填' },
                    // { type: 'number', message: '请填数字' },
                  ],
                })(
                  <Input
                    onChange={e => this.onFieldChange(jd.value, e)}
                    placeholder={jd.field}
                  />
                )}
              </Form.Item>
            </Col>
          ))}
        </Row>
        {/* <Divider />
        <Row>
          <Form.Item label="净销售额" {...oneLineLayout}>
            {getFieldDecorator('jxsSum', {
              rules: [
                { required: true, message: '必填' },
                // { type: 'number', message: '请填数字' },
              ],
            })(
              <Input
                onChange={e => this.onFieldChange('jxsSum', e)}
                placeholder="净销售额"
              />
            )}
          </Form.Item>
          </Row> */}
      </Form>
    )
  }

  onShopChange = value => {
    this.props.changeForm({ shop: value })
  }

  onYearChange = value => {
    this.props.changeForm({ year: value })
  }

  onMonthChange = value => {
    this.props.changeForm({ month: value })
  }

  onFieldChange = (field, e) => {
    this.props.changeForm({ [field]: convertNum(e.target.value) })
  }
}

const cMyForm = connect(
  ({ shop, ui, basic }) => ({
    formData: shop.costForm,
    editor: ui.editor,
    basic,
  }),
  {
    changeForm: changeForm_shopCost,
    getBasicShop,
  }
)(MyForm)

export default cMyForm

var itemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
}

// var oneLineLayout = {
//   labelCol: { span: 3 },
//   wrapperCol: { span: 4 },
// }

var years = new Array(6)
  .fill(0)
  .map((y, i) => ({ value: y + i + 2015, text: y + i + 2015 }))

var months = new Array(12).fill(0).map((m, i) => ({ value: i + 1, text: i + 1 + '月' }))

var tmFields = [
  { field: '展钻', value: 'zuanz' },
  { field: '直通车', value: 'zhitc' },
  { field: '聚划算', value: 'juhs' },
  { field: '品销宝', value: 'pinxb' },
  { field: '淘宝客', value: 'taobk' },
  { field: '天猫其他', value: 'tmqit' },
]

var jdFields = [
  { field: '品牌聚效', value: 'pinpjx' },
  { field: '京东快车', value: 'jdkc' },
  { field: '京东秒杀', value: 'jdms' },
  { field: '京挑克', value: 'jtk' },
  { field: '京东其他', value: 'jdqit' },
]

// <Row>
//         {formData.cost.map((b, index) => (
//           <Col span={6} key={index}>
//             <Form.Item label={`${index + 1}月`} {...itemLayout}>
//               {getFieldDecorator(`budget${index}`, {
//                 rules: [
//                   { required: true, message: '必填' },
//                   // { type: 'number', message: '请填数字' },
//                 ],
//                 initalValue: b,
//               })(
//                 <Input
//                   onChange={e => this.onBudgetChange(index, e)}
//                   placeholder={`${index + 1}月预算`}
//                 />
//               )}
//             </Form.Item>
//           </Col>
//         ))}
//         <Col span={6}>
//           <Form.Item label="总预算">
//             <div>
//               {formData.budget.map(b => convertNum(b)).reduce((a, b) => a + b, 0)} 元
//             </div>
//           </Form.Item>
//         </Col>
//       </Row>
