import { combineReducers } from 'redux'
import { inventory } from './inventory'
import { CRM } from './CRM'
import { geo } from './geo'
import { basic } from './basic'
import { loading } from './ui'

const app = combineReducers({
  inventory,
  CRM,
  geo,
  basic,
  loading,
})

export default app
