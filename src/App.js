// import React from 'react'
// import PropTypes from 'prop-types'
// import { Switch, Route, Redirect } from 'react-router-dom'

// import appRoutes from 'routes/app'

// // const switchRoutes = <div>switchRoutes</div>

// class App extends React.Component {
//   state = {
//     mobileOpen: false,
//   }

//   componentDidUpdate() {
//     this.refs.mainPanel.scrollTop = 0
//   }
//   render() {
//     return (
//       <div>
//         <Sidebar routes={appRoutes} />
//         <div ref="mainPanel">
//           <div className="container">{switchRoutes}</div>
//         </div>
//       </div>
//     )
//   }
// }

// // App.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // }

// export default App
import React from 'react'
import api from 'api/api'
import appRoutes from 'routes/app'

import { Layout, Breadcrumb, Icon } from 'antd'
import { Sidebar } from 'components'
const { Header, Content, Footer } = Layout

// const switchRoutes = (
//   <Switch>
//     {appRoutes.map((prop, key) => {
//       if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />
//       return <Route path={prop.path} component={prop.component} key={key} />
//     })}
//   </Switch>
// )

class App extends React.Component {
  componentDidMount() {
    console.log(api.Inventory)
    api.Inventory.getDetail().then(res => console.log('getDetail', res))
  }

  render() {
    return (
      <Layout className="vh-100">
        <Sidebar appRoutes={appRoutes} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
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
