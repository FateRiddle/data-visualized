import React, { Component } from 'react'
import { Table, Pagination } from 'antd'

const pagination = total => ({
  showSizeChanger: true,
  // defaultCurrent: 3,
  showTotal: () => `共${total}条`,
})

const List = ({ columns, data }) => {
  const total = data.length

  return (
    <Table
      rowKey={(r, index) => index}
      columns={columns}
      dataSource={data}
      bordered
      pagination={pagination(total)}
    />
  )
}

export default List
