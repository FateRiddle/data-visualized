import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_shopGeneral,
  getList_shopGeneral,
  getBasicShop,
  toggleEditor,
} from 'actions/actions'
import { Col, Row, Button } from 'antd'
import styled from 'styled-components'
import { Select, SearchSelect } from 'components'
import { CSVLink } from 'react-csv'
import { formatCSV } from 'utils'
// import moment from 'moment'

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
    const { filter, list, basic, header } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <ShopFilter
            placeholder="店铺名称"
            onChange={value => this.onFilterChange('shop', value)}
            data={basic.shop}
            value={filter.shop}
          />
        </SCol>
        <SCol span={4}>
          <SFilter
            placeholder="年份"
            onChange={value => this.onFilterChange('year', value)}
            data={years}
            value={filter.year}
          />
        </SCol>
        <SCol span={4}>
          <SFilter
            placeholder="月份"
            onChange={value => this.onFilterChange('month', value)}
            data={months}
            value={filter.month}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button className="mr3" onClick={this.clearFilters}>
            清空
          </Button>
          <CSVLink data={formatCSV(list, header)} filename="运营费用.csv">
            <Button>导出</Button>
          </CSVLink>
        </SCol>
      </SRow>
    )
  }

  onFilterChange = (key, value) => {
    this.props.changeFilter({ [key]: value })
  }

  search = () => {
    const { getList, filter } = this.props
    getList(filter)
  }

  clearFilters = () => {
    this.props.changeFilter({
      shop: '',
      year: '',
      month: '',
    })
  }

  popEditor = () => {
    this.props.toggleEditor()
  }
}

const cFilter = connect(
  ({ shop, basic }) => ({ filter: shop.generalFilter, list: shop.generalList, basic }),
  {
    changeFilter: changeFilter_shopGeneral,
    getList: getList_shopGeneral,
    getBasicShop,
    toggleEditor,
  }
)(Filter)

export default cFilter

var years = new Array(6).fill(0).map((y, i) => ({ value: i + 2015, text: i + 2015 }))

var months = new Array(12).fill(0).map((y, i) => ({ value: i + 1, text: i + 1 }))
