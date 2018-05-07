import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_CRM, getList_CRM, getBasicPinp, export_CRM } from 'actions/actions'
import { Col, Row, Input, Button, Form } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const ShangpFilter = styled(Input)`
  // max-width: 120px;
`
const PinpFilter = styled(Select)`
  // width: 100%; 这行没用Select不接受className属性，只接受style
`

class Filter extends Component {
  state = { error: false }

  componentDidMount() {
    this.props.getBasicPinp()
  }

  render() {
    const { CRM, basic } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <SRow gutter={16}>
          <SCol span={4}>
            <Form.Item>
              <PinpFilter
                placeholder="品牌"
                onChange={this.onPinpFilterChange}
                data={basic.pinp}
                value={CRM.filter.pinp}
              />
            </Form.Item>
          </SCol>
          <SCol span={4}>
            <Form.Item>
              {getFieldDecorator('pinp', {
                initialValue: CRM.filter.shangpCode,
                rules: [{ required: true, message: '商品型号为必填项' }],
              })(
                <ShangpFilter
                  placeholder="商品型号"
                  onChange={this.onShangpFilterChange}
                />
              )}
            </Form.Item>
          </SCol>
          <SCol span={6}>
            <Form.Item>
              <Button type="primary" className="mr3" onClick={this.search}>
                查询
              </Button>
              {/*<Button className="mr3" onClick={this.clearFilters}>
                清空
            </Button> */}
              <Button onClick={this.exportExcel}>导出</Button>
            </Form.Item>
          </SCol>
          <SCol span={10}>{/* <Button className="fr">添加</Button> */}</SCol>
        </SRow>
      </Form>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter({ pinp: value })
  }

  onShangpFilterChange = e => {
    this.props.changeFilter({ shangpCode: e.target.value })
  }

  search = () => {
    const { getList, CRM, form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        getList({ ...CRM.filter, first: 1, last: 100 })
      }
    })
  }

  exportExcel = () => {
    const { export_CRM, CRM, form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        export_CRM(CRM.filter)
      }
    })
  }

  clearFilters = () => {
    this.props.changeFilter({ pinp: '', shangpCode: '' })
  }
}

const cFilter = connect(({ CRM, basic }) => ({ CRM, basic }), {
  changeFilter: changeFilter_CRM,
  getList: getList_CRM,
  getBasicPinp,
  export_CRM,
})(Form.create()(Filter))

export default cFilter
