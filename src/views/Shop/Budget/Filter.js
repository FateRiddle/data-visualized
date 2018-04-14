import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_geo,
  getList_geo,
  getBasicPinp,
  getBasicProvince,
  toggleEditor_budget,
} from 'actions/actions'
import { Col, Row, Input, Button, DatePicker } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'
import moment from 'moment'

const { RangePicker } = DatePicker

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const LeimFilter = styled(Input)`
  // max-width: 120px;
`
const PinpFilter = styled(Select)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicPinp()
    this.props.getBasicProvince()
  }

  render() {
    const { geo, basic } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <PinpFilter
            placeholder="店铺名称"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={geo.filter.pinp}
          />
        </SCol>
        <SCol span={4}>
          <LeimFilter
            placeholder="年份"
            value={geo.filter.leim}
            onChange={this.onLeimFilterChange}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button onClick={this.clearFilters}>清空</Button>
        </SCol>
        <SCol span={10} className="tr">
          <Button onClick={this.addBudget}>添加</Button>
        </SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter_geo({ pinp: value })
  }

  onLeimFilterChange = e => {
    this.props.changeFilter_geo({ leim: e.target.value })
  }

  onProvinceFilterChange = value => {
    this.props.changeFilter_geo({ province: value })
  }

  search = filter => {
    const { getList_geo, geo } = this.props
    getList_geo(geo.filter)
  }

  addBudget = () => {
    this.props.toggleEditor_budget()
  }

  clearFilters = () => {
    this.props.changeFilter_geo({
      pinp: '',
      leim: '',
      province: '',
      dateFrom: '',
      dateTo: '',
    })
  }
}

const cFilter = connect(({ geo, basic }) => ({ geo, basic }), {
  changeFilter_geo,
  getList_geo,
  getBasicPinp,
  getBasicProvince,
  toggleEditor_budget,
})(Filter)

export default cFilter
