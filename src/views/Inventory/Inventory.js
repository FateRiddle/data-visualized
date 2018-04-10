import React from 'react'
import Filter from './Filter'
import List from './List'
import api from 'api/api'

class Inventory extends React.Component {
  state = {
    columns: [
      {
        title: '品牌',
        dataIndex: 'pinpName',
        render: text => <a href="#">{text}</a>,
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
        dataIndex: 'daysRemaining',
      },
    ],
    data: [],
  }

  componentDidMount() {
    api.Inventory.getDetail().then(data => {
      this.setState({ data }, () => console.log(this.state))
    })
  }

  render() {
    const { columns, data } = this.state
    return (
      <div className="">
        <Filter />
        <List columns={columns} data={data} />
      </div>
    )
  }
}

export default Inventory
