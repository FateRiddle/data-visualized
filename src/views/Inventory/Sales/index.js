import React from 'react'
import { connect } from 'react-redux'
import { getList_invSales } from 'actions/actions'
import Filter from './Filter'
import Helper from './Helper'
import { List } from 'components'

class Sales extends React.Component {
  componentDidMount() {
    // const { getList, inventory } = this.props
    // getList(inventory.salesFilter)
  }

  render() {
    const { inventory } = this.props
    const list = inventory.salesList
    // 计算合计值，用于footer显示以及统计值
    const totalNum = list.map(i => i.kucNum).reduce((a, b) => a + b, 0)
    const totalCost = list.map(i => i.cost).reduce((a, b) => a + b, 0)
    const total = { totalNum, totalCost }
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={list} footer={() => <Footer total={total} />} />
        <Helper />
      </div>
    )
  }
}

const Footer = ({ total }) => (
  <section className="flex">
    <span className="mr4 tr">总数量：{total.totalNum}</span>
    <span>总成本：{total.totalCost.toFixed(2)}元</span>
  </section>
)

const cSales = connect(({ inventory }) => ({ inventory }), {
  getList: getList_invSales,
})(Sales)

export default cSales

var columns = [
  {
    title: '品牌',
    dataIndex: 'pinpName',
  },
  {
    title: '类目',
    dataIndex: 'leibName',
  },
  {
    title: '数量',
    dataIndex: 'kucNum',
  },
  {
    title: '成本金额',
    dataIndex: 'cost',
  },
  {
    title: '数量占比',
    dataIndex: 'jiecNumPercent',
  },
  {
    title: '金额占比',
    dataIndex: 'kucSumPercent',
  },
]
