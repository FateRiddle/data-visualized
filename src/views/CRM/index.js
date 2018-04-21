import React from 'react'
import { connect } from 'react-redux'
import { getList_CRM } from 'actions/actions'
import Filter from './Filter'
import { List } from 'components'
import formatCSV from 'utils/csv'

class Detail extends React.Component {
  componentDidMount() {
    const { getList, CRM } = this.props
    // getList(CRM.filter)
  }

  componentDidUpdate() {
    // console.log(formatCSV(columns, this.props.CRM.list))
  }

  render() {
    const { CRM } = this.props
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns} data={CRM.list} />
      </div>
    )
  }
}

const cDetail = connect(({ CRM }) => ({ CRM }), {
  getList: getList_CRM,
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
    title: '商品型号',
    dataIndex: 'shangpCode',
  },
  {
    title: '姓名',
    dataIndex: 'shouhMan',
  },
  {
    title: '电话',
    dataIndex: 'shouhTel',
  },
  {
    title: '店铺',
    dataIndex: 'sellerNic',
  },
  {
    title: '订单日期',
    dataIndex: 'dinghDate',
  },
  {
    title: '地址',
    dataIndex: 'shouhAddress',
  },
]
