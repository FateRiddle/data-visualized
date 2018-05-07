import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter_invSales,
  getList_invSales,
  getBasicPinp,
  getBasicLeim,
} from 'actions/actions'
import { Col, Row, Button } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'
import { CSVLink } from 'react-csv'
import { formatCSV } from 'utils'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(Select)`
  width: 100%;
`

class Filter extends Component {
  componentDidMount() {
    this.props.getBasicPinp()
    this.props.getBasicLeim()
  }

  render() {
    const { inventory, basic, header } = this.props
    console.log(inventory)
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <SFilter
            ref={n => (this.pinpFilter = n)}
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={inventory.salesFilter.pinp}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="大类"
            onChange={value => this.onLeimFilterChange(value, 0)}
            data={basic.leim[0]}
            value={inventory.salesFilter.leim[0]}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="中类"
            onChange={value => this.onLeimFilterChange(value, 1)}
            data={basic.leim[1]}
            value={inventory.salesFilter.leim[1]}
          />
        </SCol>
        <SCol span={3}>
          <SFilter
            placeholder="小类"
            onChange={value => this.onLeimFilterChange(value, 2)}
            data={basic.leim[2]}
            value={inventory.salesFilter.leim[2]}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button className="mr3" onClick={this.clearFilters}>
            清空
          </Button>
          <CSVLink
            data={formatCSV(inventory.salesList, header)}
            filename="品类库存金额表.csv"
          >
            <Button>导出</Button>
          </CSVLink>
        </SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter_invSales({ pinp: value })
  }

  onLeimFilterChange = (value, i) => {
    const { inventory, changeFilter_invSales } = this.props
    const _leim = inventory.salesFilter.leim
    _leim[i] = value
    changeFilter_invSales({ leim: _leim })
  }

  search = () => {
    const { getList_invSales, inventory } = this.props
    getList_invSales(inventory.salesFilter)
  }

  clearFilters = () => {
    this.props.changeFilter_invSales({ pinp: '', leim: [] })
  }
}

const cFilter = connect(({ inventory, basic }) => ({ inventory, basic }), {
  changeFilter_invSales,
  getList_invSales,
  getBasicPinp,
  getBasicLeim,
})(Filter)

export default cFilter
