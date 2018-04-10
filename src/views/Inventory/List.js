import React, { Component } from 'react'
import { Table, Pagination } from 'antd'

const pagination = {
  showSizeChanger: true,
  // defaultCurrent: 3,
  showTotal: () => `共500条`,
}

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32123123421,
    address: `London, Park Lane no. ${i}`,
  })
}

const List = ({ columns }) => (
  <Table columns={columns} dataSource={data} bordered pagination={pagination} />
)

export default List
