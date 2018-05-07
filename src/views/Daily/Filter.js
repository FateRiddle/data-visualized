import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_daily, getList_daily, getBasicShop } from 'actions/actions'
import { Col, Row, Button, DatePicker } from 'antd'
import styled from 'styled-components'
import { SearchSelect, UploadFile } from 'components'
// import moment from 'moment'
import { CSVLink } from 'react-csv'

const { RangePicker } = DatePicker

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const ShopFilter = styled(SearchSelect)`
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
      <SRow gutter={16} className="">
        <SCol span={4}>
          <ShopFilter
            placeholder="店铺"
            onChange={this.onShopFilterChange}
            data={basic.shop}
            value={daily.filter.shop}
          />
        </SCol>
        <SCol span={5}>
          <SRangePicker
            placeholder="从至"
            value={[daily.filter.dateFrom || undefined, daily.filter.dateTo || undefined]}
            onChange={this.onDateChange}
          />
        </SCol>
        <SCol span={9}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button onClick={this.clearFilters}>清空</Button>
        </SCol>
        <SCol span={6} className="">
          <span className="mr3">
            <CSVLink data={excelTemplate} filename="店铺日常数据统计表.csv">
              <Button>Excel模板</Button>
            </CSVLink>
          </span>
          <span className="">
            <UploadFile />
          </span>
        </SCol>
      </SRow>
    )
  }

  onShopFilterChange = value => {
    this.props.changeFilter({ shop: value })
  }

  onDateChange = (dates, dateStrings) => {
    this.props.changeFilter({ dateFrom: dates[0], dateTo: dates[1] })
  }

  search = filter => {
    const { getList, daily } = this.props
    console.log(daily.filter)
    getList(daily.filter)
  }

  clearFilters = () => {
    this.props.changeFilter({
      shop: '',
      dateFrom: undefined,
      dateTo: undefined,
    })
  }
}

const cFilter = connect(({ daily, basic }) => ({ daily, basic }), {
  changeFilter: changeFilter_daily,
  getList: getList_daily,
  getBasicShop,
})(Filter)

export default cFilter

var excelTemplate = [
  [
    '店铺',
    '日期',
    '金额',
    '订单数',
    '净销售量（去刷去退）',
    '回款',
    '退款',
    '刷单',
    '退款率',
    '访客数（所有终端）',
    '访客数（PC端）',
    '访客数（无线端）',
    '转换率（所有）',
    '转换率（PC端）',
    '转换率（无线端）',
    '客单价（所有）',
    '客单价（PC端）',
    '客单价（无线端）',
    '直通车（京东快车）',
    '钻展',
    '品销宝',
    '淘宝客',
    '聚划算',
    '其它',
    '费用合计',
    'ROI',
  ],
]
