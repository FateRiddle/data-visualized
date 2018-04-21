import { combineReducers } from 'redux'
import { inventory } from './inventory'
import { CRM } from './CRM'
import { geo } from './geo'
import { daily } from './daily'
import { basic } from './basic'
import { loading, ui } from './ui'

const app = combineReducers({
  inventory,
  CRM,
  geo,
  daily,
  basic,
  loading,
  ui,
})

export default app
