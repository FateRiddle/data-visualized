import React, { Component } from 'react'
import { Col, Row, Input, Button } from 'antd'
import styled from 'styled-components'

const SRow = styled(Row)`
  padding-bottom: 12px;
`

const SCol = styled(Col)``

const SFilter = styled(Input)`
  // max-width: 120px;
`

export default class Filter extends Component {
  render() {
    return (
      <SRow gutter={16}>
        <SCol span={6}>
          <SFilter placeholder="品牌" />
        </SCol>
        <SCol span={6}>
          <SFilter placeholder="类别" />
        </SCol>
        <SCol span={6}>
          <Button type="primary" className="mr3">
            查询
          </Button>
          <Button>清空</Button>
        </SCol>
        <SCol span={6}>
          <Button className="fr">添加</Button>
        </SCol>
      </SRow>
    )
  }
}
