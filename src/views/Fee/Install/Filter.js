import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_geo,
  getList_geo,
  getBasicPinp,
  getBasicLeim,
  getBasicProvince,
} from 'actions/actions'
import { Col, Row, Button, DatePicker } from 'antd'
import { CSVLink } from 'react-csv'
import styled from 'styled-components'
import { Select } from 'components'
import { formatCSV } from 'utils'

const { RangePicker } = DatePicker

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(Select)`
  width: 100%;
`

const SRangePicker = styled(RangePicker)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicPinp()
    this.props.getBasicLeim()
    this.props.getBasicProvince()
  }

  render() {
    const { geo, basic, header } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={3}>
          <SFilter
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={geo.filter.pinp}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="大类"
            onChange={value => this.onLeimFilterChange(value, 0)}
            data={basic.leim[0]}
            value={geo.filter.leim[0]}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="中类"
            onChange={value => this.onLeimFilterChange(value, 1)}
            data={basic.leim[1]}
            value={geo.filter.leim[1]}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="小类"
            onChange={value => this.onLeimFilterChange(value, 2)}
            data={basic.leim[2]}
            value={geo.filter.leim[2]}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="省份"
            onChange={this.onProvinceFilterChange}
            data={basic.province}
            value={geo.filter.province}
          />
        </SCol>
        <SCol span={5}>
          <SRangePicker
            placeholder="从至"
            value={[geo.filter.dateFrom || undefined, geo.filter.dateTo || undefined]}
            onChange={this.onDateChange}
          />
        </SCol>
        <SCol span={4}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button className="mr3" onClick={this.clearFilters}>
            清空
          </Button>
          <CSVLink data={formatCSV(geo.list, header)} filename="区域类目表.csv">
            <Button>导出</Button>
          </CSVLink>
        </SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter({ pinp: value })
  }

  onLeimFilterChange = (value, i) => {
    const { geo, changeFilter } = this.props
    const _leim = geo.filter.leim
    _leim[i] = value
    changeFilter({ leim: _leim })
  }

  onProvinceFilterChange = value => {
    this.props.changeFilter({ province: value })
  }

  onDateChange = (dates, dateStrings) => {
    this.props.changeFilter({ dateFrom: dates[0], dateTo: dates[1] })
  }

  search = () => {
    const { getList, geo } = this.props
    getList(geo.filter)
  }

  clearFilters = () => {
    this.props.changeFilter({
      pinp: '',
      leim: [],
      province: '',
      dateFrom: undefined,
      dateTo: undefined,
    })
  }
}

const cFilter = connect(({ geo, basic }) => ({ geo, basic }), {
  changeFilter: changeFilter_geo,
  getList: getList_geo,
  getBasicPinp,
  getBasicLeim,
  getBasicProvince,
})(Filter)

export default cFilter
