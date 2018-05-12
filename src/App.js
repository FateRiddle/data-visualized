import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import appRoutes from 'routes/app'
import api from 'api/api'

import { Layout } from 'antd'
import { Sidebar, Title } from 'components'
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
    api.Shop.getBudget({}).then(console.log)
  }

  render() {
    return (
      <Layout className="vh-100">
        <Sidebar appRoutes={appRoutes} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '16px 16px 0' }}>
            <Title appRoutes={appRoutes} />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {switchRoutes}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            东箭集团 ©1998 I'm a troll, you're a meme
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
