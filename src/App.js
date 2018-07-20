import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import appRoutes from 'routes/app'
import api from 'api/api'
import { auth, syncUser } from 'actions/actions'

import { Layout } from 'antd'
import { Sidebar, Title, Login, Header } from 'components'
const { Content, Footer } = Layout

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)

const Main = () => (
  <Layout className="vh-100">
    <Sidebar appRoutes={appRoutes} />
    <Layout>
      <Header />
      <Content style={{ margin: '16px 16px 0' }}>
        <Title appRoutes={appRoutes} />
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {switchRoutes}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        东箭集团 ©1998 Sauce out good luck. Go hard in the paint. That's how we assert
        dominance.
      </Footer>
    </Layout>
  </Layout>
)

class App extends React.Component {
  componentDidMount() {
    const { syncUser, auth } = this.props
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    syncUser({ userId, userName })
    auth({ id: userId })
    // api.User.auth({ id: userId }).then(r => console.log('auth', r))
  }

  render() {
    const { isLogin } = this.props
    return (
      <div>
        <PrivateRoute path="/" component={Main} isLogin={isLogin} />
        <Route path="/login" component={Login} />
      </div>
    )
    // return <Route path="/" component={Main} />
  }
}

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)}
  />
)

const cApp = connect(
  ({ user }) => {
    const sessionEnd = user.sessionEnd
    const userExists = user.info.id !== undefined && user.info.id !== null
    return { isLogin: userExists && !sessionEnd }
  },
  {
    auth,
    syncUser,
  }
)(App)

export default cApp
