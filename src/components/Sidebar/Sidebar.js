import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

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
          <SidebarIcon type="user" />
          <Link to={r.path}>{r.sidebarName}</Link>
        </MenuItem>
      )
    }
  })

const Sidebar = props => {
  console.log(props)

  const defaultKey = props.appRoutes.forEach((r, i) => {
    return [1]
  })

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo" />
      <Menu className="h-100" defaultSelectedKeys={['4']}>
        {list(props.appRoutes)}
      </Menu>
    </Sider>
  )
}

export default Sidebar
