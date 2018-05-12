import React from 'react'
import { connect } from 'react-redux'
import { getList_serviceDetail } from 'actions/actions'
import Filter from './Filter'
import { List } from 'components'

class Detail extends React.Component {
  componentDidMount() {
    // const { getList } = this.props
    // getList(filter)
  }

  render() {
    const { list } = this.props
    // 计算合计值，用于footer显示以及统计值
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={list} scroll={{ x: 2400 }} />
      </div>
    )
  }
}

const cDetail = connect(({ service }) => ({ list: service.detailList }), {
  getList: getList_serviceDetail,
})(Detail)

export default cDetail

var columns = [
  {
    title: '公司',
    dataIndex: 'b2cbussiness',
  },
  {
    title: '店铺',
    dataIndex: 'b2cshop',
  },
  {
    title: '参考单号',
    dataIndex: 'cankNo',
  },
  {
    title: '服务单号',
    dataIndex: 'parent_wk_order_id',
  },
  {
    title: '订单来源',
    dataIndex: 'b_org_otype_name',
  },
  {
    title: '服务类别',
    dataIndex: 'leibName',
  },
  {
    title: '服务类目',
    dataIndex: 'service_parent',
  },
  {
    title: '服务数量',
    dataIndex: 'service_count',
  },
  {
    title: '佣金（元）',
    dataIndex: 'service_money',
  },
  {
    title: '单据状态',
    dataIndex: 'order_status',
  },
  {
    title: '创建时间',
    dataIndex: 'real_create_time',
  },
  {
    title: '完工时间',
    dataIndex: 'finished_time',
  },
]
