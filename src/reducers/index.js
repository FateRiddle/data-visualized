import { combineReducers } from 'redux'
import { inventory } from './inventory'
import { CRM } from './CRM'
import { geo } from './geo'
import { basic } from './basic'
import { loading, ui } from './ui'

const app = combineReducers({
  inventory,
  CRM,
  geo,
  basic,
  loading,
  ui,
})

export default app
