import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_serviceType,
  getList_serviceType,
  getBasicShop,
  getBasicCompany,
} from 'actions/actions'
import { Col, Row, Button, DatePicker } from 'antd'
import styled from 'styled-components'
import { SearchSelect } from 'components'
import { formatCSV } from 'utils'
import { CSVLink } from 'react-csv'

const { RangePicker } = DatePicker

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(SearchSelect)`
  width: 100%;
`
const SRangePicker = styled(RangePicker)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicShop()
    this.props.getBasicCompany()
  }

  render() {
    const { filter, basic, list, header } = this.props
    return (
      <SRow gutter={16} className="">
        <SCol span={4}>
          <SFilter
            placeholder="公司"
            onChange={this.onCompanyFilterChange}
            data={basic.company}
            value={filter.company}
          />
        </SCol>
        <SCol span={4}>
          <SFilter
            placeholder="店铺"
            onChange={this.onShopFilterChange}
            data={basic.shop}
            value={filter.shop}
          />
        </SCol>
        <SCol span={5}>
          <SRangePicker
            placeholder="从至"
            value={[filter.dateFrom || undefined, filter.dateTo || undefined]}
            onChange={this.onDateChange}
          />
        </SCol>
        <SCol span={9}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button className="mr3" onClick={this.clearFilters}>
            清空
          </Button>
          <CSVLink data={formatCSV(list, header)} filename="服务类型统计表.csv">
            <Button>导出</Button>
          </CSVLink>
        </SCol>
      </SRow>
    )
  }

  onShopFilterChange = value => {
    this.props.changeFilter({ shop: value })
  }

  onCompanyFilterChange = value => {
    this.props.changeFilter({ company: value })
  }

  onDateChange = (dates, dateStrings) => {
    this.props.changeFilter({ dateFrom: dates[0], dateTo: dates[1] })
  }

  search = () => {
    const { getList, filter } = this.props
    // console.log(filter)
    getList(filter)
  }

  clearFilters = () => {
    this.props.changeFilter({
      shop: '',
      company: '',
      dateFrom: undefined,
      dateTo: undefined,
    })
  }
}

const cFilter = connect(
  ({ service, basic }) => ({
    filter: service.typeFilter,
    list: service.typeList,
    basic,
  }),
  {
    changeFilter: changeFilter_serviceType,
    getList: getList_serviceType,
    getBasicShop,
    getBasicCompany,
  }
)(Filter)

export default cFilter
