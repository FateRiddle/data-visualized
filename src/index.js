import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons/css/tachyons.min.css'
import 'assets/css/index.css'
import 'antd/dist/antd.css'
import store from './store'

import App from './App'

const history = createBrowserHistory()

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker()
