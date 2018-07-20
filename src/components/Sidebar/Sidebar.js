import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import logo from 'assets/img/logo.svg'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

const Logo = styled.img`
  width: 20%;
`

const Header = styled.div`
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  margin: 0 0 0 10px;
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: #00a0e8;
  font-size: 1.1rem;
`

const SidebarIcon = styled(Icon)`
  display: flex;
  align-items: center;
`

const MenuItem = styled(Menu.Item)`
  display: flex;
`

const list = (appRoutes, auth) => {
  const codeList = auth ? auth.map(a => a.mokCode) : []
  return appRoutes.map((r, i) => {
    if (!r.redirect && codeList.includes(r.code)) {
      return (
        <MenuItem key={i}>
          <SidebarIcon type={r.icon || 'user'} />
          <Link to={r.path}>{r.sidebarName}</Link>
        </MenuItem>
      )
    }
    return null
  })
}

const Sidebar = props => {
  let defaultKey = ['0']
  props.appRoutes.forEach((r, i) => {
    if (r.path === props.location.pathname) {
      defaultKey = [`${i}`]
    }
  })
  console.log(props.auth)
  return (
    <Sider
      style={{ background: '#fff' }}
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type)
      }}
    >
      <Header>
        <Logo src={logo} alt="logo" />
        <Title>数据驾驶舱</Title>
      </Header>
      <Menu className="" defaultSelectedKeys={defaultKey}>
        {list(props.appRoutes, props.auth)}
      </Menu>
    </Sider>
  )
}

const cSidebar = connect(({ user }) => ({ auth: user.auth }))(Sidebar)

export default withRouter(cSidebar)
