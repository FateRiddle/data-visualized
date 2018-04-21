import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

const pagination = total => ({
  showSizeChanger: true,
  // defaultCurrent: 3,
  showTotal: () => `共${total}条`,
})

const List = ({ columns, data, loading, footer, scroll }) => {
  const total = data.length

  return (
    <Table
      rowKey={(r, index) => index}
      columns={columns}
      dataSource={data}
      bordered
      pagination={pagination(total)}
      loading={loading}
      footer={footer}
      locale={{emptyText: "无信息"}}
      scroll={scroll}
    />
  )
}

const cList = connect(({ loading }) => ({ loading }))(List)

export default cList
