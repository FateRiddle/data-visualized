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
    const { list } = this.props
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={list} />
      </div>
    )
  }
}

const cGeneral = connect(
  ({ shop, ui }) => ({ list: shop.generalList, isCreate: ui.editor.isCreate }),
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
  },
  {
    title: '费用率',
    dataIndex: 'fyl',
  },
  {
    title: '利润率',
    dataIndex: 'lrl',
  },
]
