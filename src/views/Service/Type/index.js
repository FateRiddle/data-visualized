import React from 'react'
import { connect } from 'react-redux'
import { getList_serviceType } from 'actions/actions'
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
    const totalNum = list.map(i => i.num).reduce((a, b) => a + b, 0)
    const totalCommission = list.map(i => i.commission).reduce((a, b) => a + b, 0)
    const total = {
      totalNum: parseInt(totalNum, 10),
      totalCommission: parseFloat(totalCommission),
    }
    console.log(total)
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={list} footer={() => <Footer total={total} />} />
      </div>
    )
  }
}

const cDetail = connect(({ service }) => ({ list: service.typeList }), {
  getList: getList_serviceType,
})(Detail)

export default cDetail

const Footer = ({ total }) => (
  <section className="flex">
    <span className="mr4">总服务数量 {total.totalNum}</span>
    <span>总佣金 {total.totalCommission.toFixed(2)} 元</span>
  </section>
)

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
    title: '服务类型',
    dataIndex: 'service_parent',
  },
  {
    title: '服务数量',
    dataIndex: 'num',
  },
  {
    title: '佣金（元）',
    dataIndex: 'commission',
  },
]
