import React from 'react'
import { connect } from 'react-redux'
import { getList_geo } from 'actions/actions'
import Filter from './Filter'
import Helper from './Helper'
import { List } from 'components'

class Detail extends React.Component {
  componentDidMount() {
    // const { getList, geo } = this.props
    // getList(geo.filter)
  }

  render() {
    const { geo } = this.props
    const list = geo.list
    // 计算合计值，用于footer显示以及统计值
    const totalSalesNum = list.map(i => i.xiaosNum).reduce((a, b) => a + b, 0)
    const totalSales = list.map(i => i.listSum).reduce((a, b) => a + b, 0)
    const totalChukNum = list.map(i => i.chukNum).reduce((a, b) => a + b, 0)
    const total = {
      totalSalesNum: parseInt(totalSalesNum, 10),
      totalSales: parseFloat(totalSales),
      totalChukNum: parseInt(totalChukNum, 10),
    }
    // console.log(total)
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={geo.list} footer={() => <Footer total={total} />} />
        <Helper />
      </div>
    )
  }
}

const cDetail = connect(({ geo }) => ({ geo }), {
  getList: getList_geo,
})(Detail)

export default cDetail

const Footer = ({ total }) => (
  <section className="flex">
    <span className="mr4">销售总额：{total.totalSales.toFixed(2)}元</span>
    <span className="mr4">销售总量：{total.totalSalesNum}</span>
    <span>出库总量：{total.totalChukNum}</span>
  </section>
)

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
    title: '省份',
    dataIndex: 'province',
  },
  {
    title: '销售金额',
    dataIndex: 'listSum',
  },
  {
    title: '销售金额占比',
    dataIndex: 'xiaosSumPercent',
  },
  {
    title: '销售数量',
    dataIndex: 'xiaosNum',
  },
  {
    title: '销售数量占比',
    dataIndex: 'xiaosPercent',
  },
  {
    title: '出库成本金额（含税）',
    dataIndex: 'chukhsSum',
  },
  {
    title: '出库数量',
    dataIndex: 'chukNum',
  },
  {
    title: '出库占比',
    dataIndex: 'chukPercent',
  },
]
