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
    name: '数量',
    detail: '所有成品仓同类目的商品数量之和；取自库存明细表',
  },
  {
    key: 2,
    name: '数量占比',
    detail: '当前类目的数量/当前查询条件下的总数量',
  },
  {
    key: 3,
    name: '成本金额（不含税）',
    detail: '所有成品仓同类目商品不含税金额之和；取自库存金额表',
  },
  {
    key: 4,
    name: '金额（不含税）占比',
    detail: '当前类目的成本金额/当前查询条件下的总成本',
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
