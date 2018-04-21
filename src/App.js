import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import appRoutes from 'routes/app'
import api from 'api/api'

import { Layout } from 'antd'
import { Sidebar } from 'components'
const { Header, Content, Footer } = Layout

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)

class App extends React.Component {
  componentDidMount() {
    // api.Filter.leim().then(data => {
    //   const list = data.map(d => {
    //     return { t1: d.leibName, t2: d.leibName1, t3: d.leibName2 }
    //   })
    //   console.log(list)
    // })
    api.Shop.getFees({}).then(r => console.log(r,'App'))
  }

  render() {
    return (
      <Layout className="vh-100">
        <Sidebar appRoutes={appRoutes} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {switchRoutes}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
