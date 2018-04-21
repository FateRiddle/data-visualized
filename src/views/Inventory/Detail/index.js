import React from 'react'
import { connect } from 'react-redux'
import { getList_invDetail } from 'actions/actions'
import Filter from './Filter'
import { List } from 'components'

class Detail extends React.Component {
  componentDidMount() {
    const { getList, inventory } = this.props
    // getList(inventory.detailFilter)
    // console.log(inventory.detailList)
  }

  render() {
    const { inventory } = this.props
    console.log(inventory)
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={inventory.detailList} />
      </div>
    )
  }
}

const cDetail = connect(({ inventory }) => ({ inventory }), {
  getList: getList_invDetail,
})(Detail)

export default cDetail

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
    title: '库区名称',
    dataIndex: 'cangkName',
  },
  {
    title: '商品型号',
    dataIndex: 'shangpCode',
  },
  {
    title: '批次',
    dataIndex: 'pic',
  },
  {
    title: '可售量',
    dataIndex: 'kucNum',
  },
  {
    title: '近30天销量',
    dataIndex: 'xiaosNum',
  },
  {
    title: '能卖天数',
    dataIndex: 'day',
  },
]
