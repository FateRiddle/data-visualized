import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { changeForm_daily, getBasicShop } from 'actions/actions'
import { Form, Input } from 'antd'
// import { convertNum } from 'utils'
import { SearchSelect } from 'components'

class EditForm extends React.Component {
  componentDidMount() {
    this.props.getBasicShop()
  }

  renderFrom = formData => {
    const Form = []
    for (let index = 0; index < Math.ceil(formData.length / 4); index++) {
      let rowData = formData.slice(index * 4, index * 4 + 4)
      console.log(rowData, 'riwdata')
      Form.push(<Row key={index}>{this.renderRow(rowData)}</Row>)
    }
    return Form
  }

  renderRow = rowData => {
    const {
      basic,
      form: { getFieldDecorator },
    } = this.props
    const Row = []
    rowData.forEach((row, index) => {
      Row.push(
        <Col key={index} span={6}>
          <Form.Item label={row[2]} {...itemLayout}>
            {getFieldDecorator(row[0], {
              // rules: [{ required: true, message: '必填' }],
            })(
              row[0] === 'sellerNick' ? (
                <SearchSelect
                  placeholder={row[2]}
                  onChange={v => this.onFieldChange(row[0], v)}
                  data={basic.shop}
                />
              ) : (
                <Input
                  onChange={e => this.onFieldChange(row[0], e.target.value)}
                  placeholder={row[2]}
                />
              )
            )}
          </Form.Item>
        </Col>
      )
    })
    return Row
  }

  render() {
    // form is passed from above, so the submit button can share the same form
    const { formData } = this.props
    const formArray = Object.entries(formData).filter(d => d[0] !== 'id')
    const formArrayWithNames = formArray.map(d => {
      const name = columns.find(c => c.dataIndex === d[0])
      return [...d, name ? name.title : '未知']
    })
    return <Form>{this.renderFrom(formArrayWithNames)}</Form>
  }

  onFieldChange = (key, value) => {
    // this.props.changeForm({ [key]: convertNum(value) })
    this.props.changeForm({ [key]: value })
  }
}

const cEditForm = connect(
  ({ daily, ui, basic }) => ({
    formData: daily.form,
    editor: ui.editor,
    basic,
  }),
  {
    changeForm: changeForm_daily,
    getBasicShop,
  }
)(EditForm)

export default cEditForm

var itemLayout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 12 },
}

var columns = [
  {
    title: '店铺',
    dataIndex: 'sellerNick',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '金额',
    dataIndex: 'dingdSum',
  },
  {
    title: '订单数',
    dataIndex: 'dingdNum',
  },
  {
    title: '净销量（去刷去退）',
    dataIndex: 'jingDingdSum',
  },
  {
    title: '回款',
    dataIndex: 'huikSum',
  },
  {
    title: '退款',
    dataIndex: 'tuikSum',
  },
  {
    title: '刷单',
    dataIndex: 'shuadSum',
  },
  {
    title: '退款率',
    dataIndex: 'tuikPercent',
  },
  {
    title: '访客数（所有终端）',
    dataIndex: 'allVisitorNum',
  },
  {
    title: '访客数（PC端）',
    dataIndex: 'pcVisitorNum',
  },
  {
    title: '访客数（无线端）',
    dataIndex: 'wuxVisitorNum',
  },
  {
    title: '转换率（所有）',
    dataIndex: 'allChangePercent',
  },
  {
    title: '转换率（PC端）',
    dataIndex: 'pcChangePercent',
  },
  {
    title: '转换率（无线端）',
    dataIndex: 'wuxChangePercent',
  },
  {
    title: '客单价（所有）',
    dataIndex: 'allBuyerPrice',
  },
  {
    title: '客单价（PC端）',
    dataIndex: 'pcBuyerPrice',
  },
  {
    title: '客单价（无线端）',
    dataIndex: 'wuxBuyerPrice',
  },
  {
    title: '直通车（京东快车）',
    dataIndex: 'zhitc',
  },
  {
    title: '钻展',
    dataIndex: 'zuanz',
  },
  {
    title: '品销宝',
    dataIndex: 'pinxb',
  },
  {
    title: '淘宝客',
    dataIndex: 'taobk',
  },
  {
    title: '聚划算',
    dataIndex: 'juhs',
  },
  {
    title: '其他',
    dataIndex: 'qit',
  },
  {
    title: '费用合计',
    dataIndex: 'hejSum',
  },
  {
    title: 'ROI',
    dataIndex: 'roi',
  },
]
