import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_invSales, getList_invSales, getBasicPinp } from 'actions/actions'
import { Col, Row, Input, Button } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(Input)`
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
    const { inventory, basic } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <PinpFilter
            ref={n => (this.pinpFilter = n)}
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={inventory.salesFilter.pinp}
          />
        </SCol>
        <SCol span={4}>
          <SFilter
            placeholder="类目"
            value={inventory.salesFilter.leim}
            onChange={this.onLeimFilterChange}
          />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.search}>
            查询
          </Button>
          <Button onClick={this.clearFilters}>清空</Button>
        </SCol>
        <SCol span={10}>
          <Button className="fr">添加</Button>
        </SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter_invSales({ pinp: value })
  }

  onLeimFilterChange = e => {
    this.props.changeFilter_invSales({ leim: e.target.value })
  }

  search = filter => {
    const { getList_invSales, inventory } = this.props
    getList_invSales(inventory.salesFilter)
  }

  clearFilters = () => {
    this.props.changeFilter_invSales({ pinp: '', leim: '' })
  }
}

const cFilter = connect(({ inventory, basic }) => ({ inventory, basic }), {
  changeFilter_invSales,
  getList_invSales,
  getBasicPinp,
})(Filter)

export default cFilter
