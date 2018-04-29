import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

const pagination = (total,onPageChange) => {
  const p =  {
    showSizeChanger: true,
    showTotal: () => `共${total}条`,
    total,
  }
  if(onPageChange){
    return {
      ...p,
      onChange: onPageChange
    }
  }
  return p
}

const List = ({ columns, data, loading, onPageChange, footer,total, scroll }) => {
  let _total = data.length
  if(total){
    _total = total
  }
  console.log(_total)
  
  return (
    <Table
      rowKey={(r, index) => index}
      columns={columns}
      dataSource={data}
      bordered
      pagination={pagination(_total,onPageChange)}
      loading={loading}
      footer={footer}
      locale={{emptyText: "无信息"}}
      scroll={scroll}
    />
  )
}

const cList = connect(({ loading }) => ({ loading }))(List)

export default cList
