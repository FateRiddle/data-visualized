import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_shopGeneral,
  getList_shopGeneral,
  getBasicShop,
  toggleEditor,
} from 'actions/actions'
import { Col, Row, Input, Button, DatePicker } from 'antd'
import styled from 'styled-components'
import { Select, SearchSelect } from 'components'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(Select)`
  width: 100%;
`
const ShopFilter = styled(SearchSelect)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicShop()
  }

  render() {
    const { filter, basic } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <ShopFilter
            placeholder="店铺名称"
            onChange={this.onShopFilterChange}
            data={basic.shop}
            value={filter.shop}
          />
        </SCol>
        <SCol span={4}>
          <SFilter
            placeholder="年份"
            onChange={this.onYearFilterChange}
            data={years}
            value={filter.year}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button onClick={this.clearFilters}>清空</Button>
        </SCol>
        <SCol span={10} className="tr">
          <Button onClick={this.popEditor}>添加</Button>
        </SCol>
      </SRow>
    )
  }

  onShopFilterChange = value => {
    this.props.changeFilter({ shop: value })
  }

  onYearFilterChange = value => {
    this.props.changeFilter({ year: value })
  }

  search = () => {
    const { getList, filter } = this.props
    getList(filter)
  }

  clearFilters = () => {
    this.props.changeFilter({
      shop: '',
      year: '',
    })
  }

  popEditor = () => {
    this.props.toggleEditor()
  }
}

const cFilter = connect(({ shop, basic }) => ({ filter: shop.generalFilter, basic }), {
  changeFilter: changeFilter_shopGeneral,
  getList: getList_shopGeneral,
  getBasicShop,
  toggleEditor,
})(Filter)

export default cFilter

var years = new Array(6)
  .fill(0)
  .map((y, i) => ({ value: y + i + 2015, text: y + i + 2015 }))
