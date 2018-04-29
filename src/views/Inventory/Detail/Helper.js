import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { Pop } from 'components'
import { toggleHelper } from 'actions/actions'

const Helper = ({ visible, toggleHelper }) => (
  <Pop
    title="添加店铺预算"
    visible={visible}
    toggle={toggleHelper}
    footer={null}
    width="600px"
  >
    <ExplainTable />
  </Pop>
)

const ExplainTable = () => (
  <Table dataSource={dataSource} columns={columns} pagination={false} />
)

const dataSource = [
  {
    key: 1,
    name: '可售量',
    detail: '未占库的商品数量；取自库存明细表',
  },
  {
    key: 2,
    name: '近30天销量',
    detail: '从前一天开始，往前推30天的销量出库数量之和',
  },
  {
    key: 3,
    name: '能卖天数',
    detail: '可售量/近30天的销量*30（天）',
  },
]

const columns = [
  {
    title: '指标名称',
    dataIndex: 'name',
  },
  {
    title: '指标解释',
    dataIndex: 'detail',
  },
]

export default connect(({ ui }) => ({ visible: ui.helper }), { toggleHelper })(Helper)
