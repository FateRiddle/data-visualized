import React from 'react'
import ReactDOM from 'react-dom'
// import { createBrowserHistory } from 'history'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'tachyons/css/tachyons.min.css'
import 'assets/css/index.css'
import 'antd/dist/antd.css'
import configureStore from './configureStore'
// import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import throttle from 'lodash/throttle'
// moment.locale('zh-cn')

// const history = createBrowserHistory()
// import registerServiceWorker from './registerServiceWorker'
import registerServiceWorker from './regSW'

const store = configureStore()

// store.subscribe(
//   throttle(() => {
//     const userName = localStorage.getItem('userName')
//     const userId = localStorage.getItem('userId')
//     store.dispatch(syncUser({ userId, userName }))
//     window.store = store
//   }, 10000)
// )

const Root = () => (
  <LocaleProvider locale={zhCN}>
    <Router>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </Router>
  </LocaleProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker()
