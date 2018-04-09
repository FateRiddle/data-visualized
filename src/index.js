import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons/css/tachyons.min.css'
import 'assets/css/index.css'
import 'antd/dist/antd.css'

import App from './App'

const history = createBrowserHistory()

const Root = () => (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker()
