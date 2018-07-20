import React from 'react'
import { Icon } from 'antd'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { syncUser } from 'actions/actions'
import { Layout } from 'antd'
const { Header } = Layout

const style = {
  background: '#fff',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '3%',
}

const MyHeader = ({ name, history, syncUser }) => {
  const logout = () => {
    localStorage.clear()
    syncUser({})
    history.push('/')
  }

  return (
    <Header style={style}>
      <Icon type="poweroff" className="pointer red dim b" onClick={logout} />
      <span className="ml2">{name}</span>
    </Header>
  )
  // return <Header style={style} />
}

let cMyHeader = connect(
  ({ user }) => ({ name: user && user.info.name }),
  { syncUser }
)(MyHeader)

cMyHeader = withRouter(cMyHeader)

export default cMyHeader
