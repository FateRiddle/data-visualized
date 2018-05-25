import React from 'react'
import { connect } from 'react-redux'
import {
  getList_shopBudget,
  toggleEditor,
  changeEditForm_shopBudget,
  asEdit,
} from 'actions/actions'
import Filter from './Filter'
import CreateEditor from './CreateEditor'
import EditEditor from './EditEditor'
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
        <List columns={columns(this.onEdit)} data={list} scroll={{ x: 1600 }} />
        {isCreate ? <CreateEditor /> : <EditEditor />}
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
  ({ shop, ui }) => ({ list: shop.budgetList, isCreate: ui.editor.isCreate }),
  {
    getList: getList_shopBudget,
    toggleEditor,
    changeForm: changeEditForm_shopBudget,
    asEdit,
  }
)(Budget)

export default cBudget

const formatPercent = value => value && value + '%'

var columns = onEdit => [
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
    title: '推广费预算（元）',
    dataIndex: 'ys',
  },
  {
    title: '销售目标',
    dataIndex: 'xiaosmb',
  },
  {
    title: '仓储费占比',
    dataIndex: 'cangcfratio',
    render: value => formatPercent(value),
  },
  {
    title: '安维费占比',
    dataIndex: 'anzwxSum',
    render: value => formatPercent(value),
  },
  {
    title: '运费占比',
    dataIndex: 'yunfratio',
    render: value => formatPercent(value),
  },
  {
    title: '人工费占比',
    dataIndex: 'rengSum',
    render: value => formatPercent(value),
  },
  {
    title: '平台费占比',
    dataIndex: 'pingtfratio',
    render: value => formatPercent(value),
  },
  {
    title: '信息部占比',
    dataIndex: 'xinxbratio',
    render: value => formatPercent(value),
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
