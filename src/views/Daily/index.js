import React from 'react'
import { connect } from 'react-redux'
import { getList_daily, toggleEditor, changeForm_daily, asEdit } from 'actions/actions'
import Filter from './Filter'
import Editor from './Editor'
import { List } from 'components'

class Detail extends React.Component {
  // componentDidMount() {
  //   const { getList, daily } = this.props
  //   getList(daily.filter)
  // }

  render() {
    const { daily, isCreate } = this.props
    return (
      <div className="">
        <Filter />
        <List columns={columns(this.onEdit)} data={daily.list} scroll={{ x: 3800 }} />
        <Editor isCreate={isCreate} />
      </div>
    )
  }

  onEdit = record => {
    console.log(record)
    const { changeForm, toggleEditor, asEdit } = this.props
    changeForm(record)
    asEdit()
    toggleEditor()
  }
}

const cDetail = connect(
  ({ daily, ui }) => ({ daily, isCreate: ui.editor.isCreate }),
  {
    getList: getList_daily,
    toggleEditor,
    changeForm: changeForm_daily,
    asEdit,
  }
)(Detail)

export default cDetail

var columns = onEdit => [
  {
    title: '店铺',
    dataIndex: 'sellerNick',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '金额',
    dataIndex: 'dingdSum',
  },
  {
    title: '订单数',
    dataIndex: 'dingdNum',
  },
  {
    title: '净销量（去刷去退）',
    dataIndex: 'jingDingdSum',
  },
  {
    title: '回款',
    dataIndex: 'huikSum',
  },
  {
    title: '退款',
    dataIndex: 'tuikSum',
  },
  {
    title: '刷单',
    dataIndex: 'shuadSum',
  },
  {
    title: '退款率',
    dataIndex: 'tuikPercent',
  },
  {
    title: '访客数（所有终端）',
    dataIndex: 'allVisitorNum',
  },
  {
    title: '访客数（PC端）',
    dataIndex: 'pcVisitorNum',
  },
  {
    title: '访客数（无线端）',
    dataIndex: 'wuxVisitorNum',
  },
  {
    title: '转换率（所有）',
    dataIndex: 'allChangePercent',
  },
  {
    title: '转换率（PC端）',
    dataIndex: 'pcChangePercent',
  },
  {
    title: '转换率（无线端）',
    dataIndex: 'wuxChangePercent',
  },
  {
    title: '客单价（所有）',
    dataIndex: 'allBuyerPrice',
  },
  {
    title: '客单价（PC端）',
    dataIndex: 'pcBuyerPrice',
  },
  {
    title: '客单价（无线端）',
    dataIndex: 'wuxBuyerPrice',
  },
  {
    title: '直通车（京东快车）',
    dataIndex: 'zhitc',
  },
  {
    title: '钻展',
    dataIndex: 'zuanz',
  },
  {
    title: '品销宝',
    dataIndex: 'pinxb',
  },
  {
    title: '淘宝客',
    dataIndex: 'taobk',
  },
  {
    title: '聚划算',
    dataIndex: 'juhs',
  },
  {
    title: '其他',
    dataIndex: 'qit',
  },
  {
    title: '费用合计',
    dataIndex: 'hejSum',
  },
  {
    title: 'ROI',
    dataIndex: 'roi',
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
