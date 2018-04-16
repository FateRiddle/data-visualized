import React from 'react'
import { connect } from 'react-redux'
import { Pop } from 'components'
import Form from './Form'
import { toggleBudgetPop, createBudget, editBudget } from 'actions/actions'

const Editor = ({
  isCreate,
  ui,
  toggleBudgetPop,
  createBudget,
  editBudget,
}) => (
  <Pop
    title={isCreate ? '添加' : '修改'}
    visible={ui.budgetPop}
    toggle={toggleBudgetPop}
    submit={isCreate ? createBudget : editBudget}
  >
    <Form />
  </Pop>
)

const cEditor = connect(({ ui }) => ({ ui }), {
  toggleBudgetPop,
  createBudget,
  editBudget,
})(Editor)

export default cEditor
