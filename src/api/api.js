import axios from 'axios'

//constant
const API_ROOT = 'http://10.86.10.22:7080/b2c_test/sys/proc/bobaoProc.jsp'
// const API_ROOT = 'http://192.168.10.252:8080/'

//when refresh,seems to need reset it
// const token = window.localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

// every request being a form request
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//first time setToken
// const setToken = _token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`
// }

//setting up request
const request = axios.create({
  baseURL: API_ROOT,
  // timeout: 5000,
})

//methods
// const encode = encodeURIComponent
// const responseBody = res => res.data.recordset
const responseOutput = res => res.data.rows

const ax = {
  del: (url, params) => request.delete(url, { params }).then(responseOutput),
  get: params => request.get('', { params }).then(responseOutput),
  put: (url, body) => request.put(url, body).then(responseOutput),
  post: (url, body) => request.post(url, body).then(responseOutput),
}

const Filter = {
  province: () => ax.get({ procName: 'PROC_SYS_JSC_PROVINCE_LOAD' }),
  pinp: () => ax.get({ procName: 'PROC_SYS_JSC_PINP_LOAD' }),
}

//店铺预算budget,费用fee
const Shop = {
  getBudgets: ({ shopName, year }) => ax.get('shop/budget', { shopName, year }), // 返回 id, year, month, shopName, budget, saleTarget
  createBudget: ({ year, month, shopName, budgets, saleTargets }) =>
    ax.post('shop/budget', { year, month, shopName, budgets, saleTargets }), //budgets,saleTargets是12个月的数据，数组形式
  updateBudget: ({ year, month, shopName, budgets, saleTargets }) =>
    ax.put('shop/budget', { year, month, shopName, budgets, saleTargets }),
  deleteBudget: id => ax.del('shop/budget', { id }), //相当于shop/budget/id
  getFees: ({ shopName, year }) => ax.get('shop/fee', { shopName, year }), // applyCode, year, month, shopName, tmFees, jdFees, sales
  createFee: ({ year, month, shopName, tmFees, jdFees, sales }) =>
    ax.post('shop/fee', { year, month, shopName, tmFees, jdFees, sales }), //tmFees是长度6的数组, jdFees是长度5的数组
  updateFee: ({ year, month, shopName, tmFees, jdFees, sales }) =>
    ax.put('shop/fee', { year, month, shopName, tmFees, jdFees, sales }),
  deleteFee: id => ax.del('shop/fee', { id }), //相当于shop/budget/id
}

//库存
const Inventory = {
  getSales: ({ pinp, leim }) =>
    ax.get({
      in_pinpName: pinp,
      in_leibName: leim,
      procName: 'PROC_MM_PINL_KUC_SUM_RPT',
    }), // pinp,leim, amount, cost, amountPer, costPer
  getDetail: ({ pinp, shangpCode }) =>
    ax.get({
      in_pinpName: pinp,
      in_shangpCode: shangpCode,
      procName: 'PROC_SYS_JSC_KXMC_LOAD',
    }), // pinp,leim, kuq, shangpCode, pic, amountForSale, sales30Day
}

const SalesInfo = {
  get: ({ shopName, dateFrom, dateTo }) =>
    ax.post('sales', { shopName, dateFrom, dateTo }), //这个根据店铺日常数据统计表你来定每个字段的名字吧。
  create: ({ ...data }) => ax.post('sales', { ...data }), //这个根据店铺日常数据统计表你来定每个字段的名字吧。
}

const Customer = {
  // 返回 pingp,leim,shangpCode,name,phone,shopName,dingdDate, age, address
  get: ({ pinp, shangpCode }) =>
    ax.get({
      in_pinpName: pinp,
      in_shangpCode: shangpCode,
      procName: 'PROC_MM_KEH_GOUM_LOAD',
    }),
}

const Geo = {
  get: ({ pinp, leim, province, dateFrom, dateTo }) =>
    ax.get({
      in_pinpName: pinp,
      in_leibName: leim,
      in_province: province,
      in_caozDateStart: dateFrom,
      in_caozDateEnd: dateTo,
      procName: 'PROC_SYS_JSC_QUY_LEIM_LOAD',
    }),
  //返回pinp,leim,province,sales,salesPer,salesAmount,salesAmountPer,chukCost, chukCostPer, chukAmount
}

export default {
  Filter,
  Shop,
  Inventory,
  SalesInfo,
  Customer,
  Geo,
}
