import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_daily, getList_daily, getBasicShop } from 'actions/actions'
import { Col, Row, Button, DatePicker } from 'antd'
import styled from 'styled-components'
import { Select, UploadFile } from 'components'
import moment from 'moment'

const { RangePicker } = DatePicker

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const ShopFilter = styled(Select)`
  width: 100%;
`
const SRangePicker = styled(RangePicker)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicShop()
  }

  render() {
    const { daily, basic } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <ShopFilter
            placeholder="店铺"
            onChange={this.onShopFilterChange}
            data={basic.shop}
            value={daily.filter.shop}
          />
        </SCol>
        <SCol span={5}>
          <SRangePicker placeholder="从至" defaultValue={[undefined, undefined]} />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button onClick={this.clearFilters}>清空</Button>
        </SCol>
        <SCol span={9}>
          <div className="fr w5">
            <UploadFile />
          </div>
        </SCol>
      </SRow>
    )
  }

  onShopFilterChange = value => {
    this.props.changeFilter_daily({ shop: value })
  }

  search = filter => {
    const { getList_daily, daily } = this.props
    getList_daily(daily.filter)
  }

  clearFilters = () => {
    this.props.changeFilter_daily({
      shop: '',
      dateFrom: '',
      dateTo: '',
    })
  }
}

const cFilter = connect(({ daily, basic }) => ({ daily, basic }), {
  changeFilter_daily,
  getList_daily,
  getBasicShop,
})(Filter)

export default cFilter
