import React from 'react'
import { Breadcrumb, Card, Button } from 'antd'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { toggleHelper } from 'actions/actions'

const Title = ({ appRoutes, location, toggleHelper }) => {
  const route = appRoutes.find(r => r.path === location.pathname)
  return (
    <Card
      bodyStyle={{
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
      }}
      style={{ marginBottom: 8 }}
    >
      <div style={{ flexGrow: 1 }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>{route.sidebarMenu}</Breadcrumb.Item>
          <Breadcrumb.Item>{route.sidebarName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Button disabled={!route.showHelper} onClick={toggleHelper}>
        指标说明
      </Button>
    </Card>
  )
}

export default withRouter(connect(null, { toggleHelper })(Title))
