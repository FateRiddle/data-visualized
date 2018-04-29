import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter_invDetail, getList_invDetail, getBasicPinp } from 'actions/actions'
import { Col, Row, Input, Button } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'
import { CSVLink } from 'react-csv'
import { formatCSV } from 'utils'

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
    const { inventory, basic, header } = this.props
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <PinpFilter
            ref={n => (this.pinpFilter = n)}
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={basic.pinp}
            value={inventory.detailFilter.pinp}
          />
        </SCol>
        <SCol span={4}>
          <ShangpFilter
            placeholder="商品型号"
            value={inventory.detailFilter.shangpCode}
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
          <CSVLink
            data={formatCSV(inventory.detailList, header)}
            filename="库存明细表.csv"
          >
            <Button>导出</Button>
          </CSVLink>
        </SCol>
      </SRow>
    )
  }

  onPinpFilterChange = value => {
    this.props.changeFilter_invDetail({ pinp: value })
  }

  onShangpFilterChange = e => {
    this.props.changeFilter_invDetail({ shangpCode: e.target.value })
  }

  search = filter => {
    const { getList_invDetail, inventory } = this.props
    getList_invDetail(inventory.detailFilter)
  }

  clearFilters = () => {
    this.props.changeFilter_invDetail({ pinp: '', shangpCode: '' })
  }
}

const cFilter = connect(({ inventory, basic }) => ({ inventory, basic }), {
  changeFilter_invDetail,
  getList_invDetail,
  getBasicPinp,
})(Filter)

export default cFilter
