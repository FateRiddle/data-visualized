import React from 'react'
import { connect } from 'react-redux'
import { getList_shopGeneral, toggleEditor } from 'actions/actions'
import Filter from './Filter'
import { List } from 'components'

class General extends React.Component {
  componentDidMount() {
    // this.props.getList(this.props.filter)
  }

  onEdit = record => {
    this.props.toggleEditor(record)
  }

  render() {
    const { list, total } = this.props
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={list} footer={() => <Footer total={total} />} />
      </div>
    )
  }
}

const Footer = ({ total }) => (
  <section className="flex">
    <span className="mr4">已用推广费：{total.out_yymoney?total.out_yymoney.toFixed(2):'0.00'}元</span>
    <span className="mr4">总推广费：{total.out_ztgmoney?total.out_ztgmoney.toFixed(2):'0.00'}元</span>
    <span className="mr4">实际完成金额：{total.out_wcmoney?total.out_wcmoney.toFixed(2):'0.00'}元</span>
    <span className="mr4">销售目标：{total.out_xsmoney?total.out_xsmoney.toFixed(2):'0.00'}元</span>
    <span className="mr4">毛利率：{total.out_mllratio?(total.out_mllratio*100).toFixed(2):'0.00'}%</span>
    <span className="mr4">费用率：{total.out_fylratio?(total.out_fylratio*100).toFixed(2):'0.00'}%</span>
    <span className="mr4">利润率：{total.out_lrlratio?(total.out_lrlratio*100).toFixed(2):'0.00'}%</span>
  </section>
)

const cGeneral = connect(
  ({ shop, ui }) => ({
    list: shop.generalList,
    total: shop.generalTotal,
    isCreate: ui.editor.isCreate,
  }),
  {
    getList: getList_shopGeneral,
    toggleEditor,
  }
)(General)

export default cGeneral

var columns = [
  {
    title: '年',
    dataIndex: 'year',
  },
  {
    title: '月',
    dataIndex: 'month',
  },
  {
    title: '店铺名称',
    dataIndex: 'dpName',
  },
  {
    title: '品牌',
    dataIndex: 'pinpsx',
  },
  {
    title: '已用推广费（元）',
    dataIndex: 'yySum',
  },
  {
    title: '总推广费（元）',
    dataIndex: 'zongSum',
  },
  {
    title: '实际完成金额（元）',
    dataIndex: 'wcPrice',
  },
  {
    title: '销售目标（元）',
    dataIndex: 'xiaosmb',
  },
  {
    title: '毛利率',
    dataIndex: 'mll',
    render: value => value && (value * 100).toFixed(2) + '%',
  },
  {
    title: '费用率',
    dataIndex: 'fyl',
    render: value => value && (value * 100).toFixed(2) + '%',
  },
  {
    title: '利润率',
    dataIndex: 'lrl',
    render: value => value && (value * 100).toFixed(2) + '%',
  },
]
