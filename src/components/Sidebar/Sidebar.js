import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Sider } = Layout

const SidebarLink = styled(Link)`
  color: gray;
  text-decoration: none;
  transition: color 0.15s ease-in;
  &:hover {
    color: black;
  }
`

const list = appRoutes =>
  appRoutes.map((r, i) => {
    if (!r.redirect) {
      return (
        <Menu.Item key={i}>
          <Icon type="user" />
          <span>
            <SidebarLink to={r.path}>{r.sidebarName}</SidebarLink>
          </span>
        </Menu.Item>
      )
    }
  })

const Sidebar = ({ appRoutes }) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo" />
      <Menu className="h-100" defaultSelectedKeys={['0']}>
        {list(appRoutes)}
      </Menu>
    </Sider>
  )
}

export default Sidebar
