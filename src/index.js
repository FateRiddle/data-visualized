import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons/css/tachyons.min.css'
import 'assets/css/index.css'
import 'antd/dist/antd.css'
import configureStore from './configureStore'
import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'

moment.locale('zh-cn')

const history = createBrowserHistory()

const store = configureStore()

const Root = () => (
  <Router history={history}>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker()
