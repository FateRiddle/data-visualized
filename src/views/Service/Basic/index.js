import React from 'react'
import { connect } from 'react-redux'
import { getList_serviceBasic } from 'actions/actions'
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
    const totalCommission = list.map(i => i.commission).reduce((a, b) => a + b, 0)
    const total = {
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

const cDetail = connect(({ service }) => ({ list: service.basicList }), {
  getList: getList_serviceBasic,
})(Detail)

export default cDetail

const Footer = ({ total }) => (
  <section className="flex">
    <span className="mr4">佣金合计 {total.totalCommission.toFixed(2)} 元</span>
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
    title: '佣金（元）',
    dataIndex: 'commission',
  },
]
