import React from 'react'
import { Divider } from 'antd'
import { connect } from 'react-redux'
import {
  getList_shopCost,
  toggleEditor,
  changeForm_shopCost,
  asEdit,
} from 'actions/actions'
import Filter from './Filter'
import Editor from './Editor'
import { List } from 'components'

class Budget extends React.Component {
  componentDidMount() {
    // this.props.getList(this.props.filter)
  }

  render() {
    const { list, isCreate } = this.props
    return (
      <div className="">
        <Filter header={columns} />
        <List columns={columns(this.onEdit)} data={list} />
        <Editor isCreate={isCreate} />
      </div>
    )
  }

  onEdit = record => {
    // console.log(record)
    const { changeForm, toggleEditor, asEdit } = this.props
    changeForm({
      ...record,
      id: record.ID,
      shop: record.dpName,
    })
    asEdit()
    toggleEditor()
  }
}

const cBudget = connect(
  ({ shop, ui }) => ({ list: shop.costList, isCreate: ui.editor.isCreate }),
  {
    getList: getList_shopCost,
    toggleEditor,
    changeForm: changeForm_shopCost,
    asEdit,
  }
)(Budget)

export default cBudget

var columns = onEdit => [
  {
    title: '申请编码',
    dataIndex: 'sqCode',
  },
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
    title: '天猫平台费用',
    dataIndex: 'tmptSum',
  },
  {
    title: '京东平台费用',
    dataIndex: 'jdptSum',
  },
  {
    title: '净销售金额',
    dataIndex: 'jxsSum',
  },
  {
    title: '创建人',
    dataIndex: 'chuangjrName',
  },
  {
    title: '创建时间',
    dataIndex: 'chuangjTime',
  },
  {
    title: '修改人',
    dataIndex: 'xiugrName',
  },
  {
    title: '修改时间',
    dataIndex: 'xiugTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;" onClick={() => onEdit(record)}>
          修改
        </a>
      </span>
    ),
  },
]

// <Divider type="vertical" />
// <a href="javascript:;" onClick={() => onDelete(record)}>
//   删除
// </a>
