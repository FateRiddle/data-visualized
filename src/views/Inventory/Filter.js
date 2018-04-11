import React, { Component } from 'react'
import { Col, Row, Input, Button } from 'antd'
import styled from 'styled-components'
import { Select } from 'components'
import api from 'api/api'
const { Option } = Select

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

export default class Filter extends Component {
  state = { pinpData: [], pinp: '', leim: '' }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    api.Filter.pinp().then(data => {
      if (data) {
        const _data = data.map(d => ({ value: d.pinpName, text: d.pinpName }))
        this.setState({ pinpData: _data })
      }
    })
  }

  onPinpFilterChange = value => {
    this.setState({ pinp: value })
  }

  render() {
    return (
      <SRow gutter={16}>
        <SCol span={4}>
          <PinpFilter
            ref={n => (this.pinpFilter = n)}
            placeholder="品牌"
            onChange={this.onPinpFilterChange}
            data={this.state.pinpData}
          />
        </SCol>
        <SCol span={4}>
          <SFilter placeholder="类别" />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3" onClick={this.fetchData}>
            查询
          </Button>
          <Button>清空</Button>
        </SCol>
        <SCol span={10}>
          <Button className="fr">添加</Button>
        </SCol>
      </SRow>
    )
  }
}
