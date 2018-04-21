import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
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
  letter-spacing: .1rem;
  font-weight: 600;
  color: #00A0E8;
  font-size: 1.1rem;
`

const SidebarIcon = styled(Icon)`
  display: flex;
  align-items: center;
`

const MenuItem = styled(Menu.Item)`
  display: flex;
`

const list = appRoutes =>
  appRoutes.map((r, i) => {
    if (!r.redirect) {
      return (
        <MenuItem key={i}>
          <SidebarIcon type={r.icon || 'user'} />
          <Link to={r.path}>{r.sidebarName}</Link>
        </MenuItem>
      )
    }
  })

const Sidebar = props => {
  let defaultKey = ['0']
  props.appRoutes.forEach((r,i) => {
    if(r.path == props.location.pathname){
      defaultKey = [`${i}`]
    }
  })

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <Header className="">
        <Logo src={logo} alt="logo" />
        <Title>数据驾驶舱</Title>
      </Header>
      <Menu className="h-100" defaultSelectedKeys={defaultKey}>
        {list(props.appRoutes)}
      </Menu>
    </Sider>
  )
}

export default withRouter(Sidebar)
