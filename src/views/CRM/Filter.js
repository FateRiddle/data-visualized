import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_CRM, getList_CRM, getBasicPinp } from 'actions/actions'
import { Col, Row, Input, Button } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'
import { CSVLink } from 'react-csv'
import formatCSV from 'utils/csv'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const ShangpFilter = styled(Input)`
  // max-width: 120px;
`
const PinpFilter = styled(Select)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicPinp()
  }

  render() {
    const { CRM, basic, header } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <PinpFilter
            ref={n => (this.pinpFilter = n)}
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={CRM.filter.pinp}
          />
        </SCol>
        <SCol span={4}>
          <ShangpFilter
            placeholder="商品型号"
            value={CRM.filter.shangpCode}
            onChange={this.onShangpFilterChange}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button className="mr3" onClick={this.clearFilters}>
            清空
          </Button>
          <CSVLink data={formatCSV(CRM.list, header)} filename="CRM历史数据.csv">
            <Button>导出</Button>
          </CSVLink>
        </SCol>
        <SCol span={10}>{/* <Button className="fr">添加</Button> */}</SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter_CRM({ pinp: value })
  }

  onShangpFilterChange = e => {
    this.props.changeFilter_CRM({ shangpCode: e.target.value })
  }

  search = () => {
    const { getList_CRM, CRM } = this.props
    getList_CRM(CRM.filter)
  }

  clearFilters = () => {
    this.props.changeFilter_CRM({ pinp: '', shangpCode: '' })
  }
}

const cFilter = connect(({ CRM, basic }) => ({ CRM, basic }), {
  changeFilter_CRM,
  getList_CRM,
  getBasicPinp,
})(Filter)

export default cFilter
