import { combineReducers } from 'redux'
import { shop } from './shop'
import { inventory } from './inventory'
import { CRM } from './CRM'
import { geo } from './geo'
import { daily } from './daily'
import { fee } from './fee'
import { basic } from './basic'
import { loading, ui } from './ui'

const app = combineReducers({
  shop,
  inventory,
  CRM,
  geo,
  daily,
  fee,
  basic,
  loading,
  ui,
})

export default app
