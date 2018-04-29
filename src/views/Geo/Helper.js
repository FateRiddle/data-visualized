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
    width="700px"
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
    name: '销售金额（含税）',
    detail: '当前时间内，该类目在此省份的销售金额之和；取自订单总表',
  },
  {
    key: 2,
    name: '销售金额（含税）占比',
    detail: '当前省份的销售金额（含税）/当前查询条件下的销售总额（含税）',
  },
  {
    key: 3,
    name: '销售数量',
    detail: '符合品牌，类目，省份的商品销售数量之和；取自订单总表',
  },
  {
    key: 4,
    name: '销售数量占比',
    detail: '当前省份的销售数量/当前查询条件下的销售总量',
  },
  {
    key: 5,
    name: '出库数量',
    detail: '当前时间内，该类目在此省份的出库数量；取自销售明细表',
  },
  {
    key: 6,
    name: '出库占比',
    detail: '当前省份的出库数量/当前查询条件下的出库总量;取自销售明细表',
  },
  {
    key: 7,
    name: '出库成本金额（含税）',
    detail: '当前时间内，该类目在此省份的出库成本金额；取自销售明细表',
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
