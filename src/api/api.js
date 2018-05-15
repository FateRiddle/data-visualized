import axios from 'axios'

// 正式
// const API_ROOT = 'http://s2.ruerp.com/dserp/sys/proc/bobaoProc.jsp'
// export const upload_url = '//s2.ruerp.com/dserp/jscupload'
// const export_url = 'http://s2.ruerp.com/dserp/sys/proc/excelJiekport.jsp'

// 测试
const API_ROOT = 'http://61.164.47.179:2208/dserp/sys/proc/bobaoProc.jsp'
export const upload_url = '//61.164.47.179:2208/b2c_test/jscupload'
const export_url = 'http://61.164.47.179:2208/dserp/sys/proc/excelJiekport.jsp'

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
const responseResult = res => res.data.result

const ax = {
  del: (url, params) => request.delete(url, { params }).then(responseOutput),
  get: params => request.get('', { params }).then(responseOutput),
  put: params => request.get('', { params }).then(responseResult),
  post: params => request.get('', { params }).then(responseResult),
}

const Filter = {
  province: () => ax.get({ procName: 'PROC_SYS_JSC_PROVINCE_LOAD' }),
  pinp: () => ax.get({ procName: 'PROC_SYS_JSC_PINP_LOAD' }),
  shop: () => ax.get({ procName: 'PROC_MM_DIANP_LOAD' }),
  leim: () => ax.get({ procName: 'PROC_SYS_JSC_LEIB_LOAD' }),
  company: () => ax.get({ procName: 'PROC_MM_GONGS_LOAD' }),
}

// 我们的接口太不规范，都是get请求。
//店铺预算budget,费用cost
const Shop = {
  //店铺预防维护 花生
  getBudget: ({ shop, year }) =>
    ax.get({
      in_dpName: shop,
      in_flag: 1, //有效flag
      in_year: year,
      procName: 'PROC_JSC_DPYSWH_LOAD',
    }), // 返回 id, year, month, shopName, budget, saleTarget
  createBudget: data => {
    console.log(data)
    return ax.post({
      in_dpName: data.shop,
      in_year: data.year,
      in_month: data.month,
      in_ys: data.ys,
      in_anzwxSum: data.anzwxSum,
      in_yunfratio: data.yunfratio,
      in_cangcfratio: data.cangcfratio,
      in_rengSum: data.rengSum,
      in_xiaosmb: data.xiaosmb,
      procName: 'PROC_JSC_DPYSWH_ADD',
    }) //budgets,saleTargets是12个月的数据，数组形式
  },

  editBudget: data =>
    ax.put({
      in_id: data.id,
      in_dpName: data.shop,
      in_year: data.year,
      in_month: data.month,
      in_ys: data.ys,
      in_anzwxSum: data.anzwxSum,
      in_yunfratio: data.yunfratio,
      in_cangcfratio: data.cangcfratio,
      in_rengSum: data.rengSum,
      in_xiaosmb: data.xiaosmb,
      procName: 'PROC_JSC_DPYSWH_EDIT',
    }), //budgets,saleTargets是12个月的数据，数组形式
  deleteBudget: id => ax.del('shop/budget', { id }), //相当于shop/budget/id
  // 店铺费用维护 花生
  getCost: ({ shop, year }) =>
    ax.get({
      in_dpName: shop,
      in_flag: 1, //有效flag
      in_year: year,
      procName: 'PROC_JSC_DPYSED_LOAD',
    }), // applyCode, year, month, shopName, tmFees, jdFees, sales
  createCost: data =>
    ax.post({
      in_year: data.year,
      in_month: data.month,
      in_dpName: data.shop,
      in_zuanz: data.zuanz,
      in_zhitc: data.zhitc,
      in_juhs: data.juhs,
      in_pinxb: data.pinxb,
      in_taobk: data.taobk,
      in_tmqit: data.tmqit,
      in_pinpjx: data.pinpjx,
      in_jdkc: data.jdkc,
      in_jdms: data.jdms,
      in_jtk: data.jtk,
      in_jdqit: data.jdqit,
      in_jxsSum: data.jxsSum,
      procName: 'PROC_JSC_DPYSED_ADD',
    }), //budgets,saleTargets是12个月的数据，数组形式
  editCost: data =>
    ax.put({
      in_ID: data.ID,
      in_year: data.year,
      in_month: data.month,
      in_dpName: data.shop,
      in_zuanz: data.zuanz,
      in_zhitc: data.zhitc,
      in_juhs: data.juhs,
      in_pinxb: data.pinxb,
      in_taobk: data.taobk,
      in_tmqit: data.tmqit,
      in_pinpjx: data.pinpjx,
      in_jdkc: data.jdkc,
      in_jdms: data.jdms,
      in_jtk: data.jtk,
      in_jdqit: data.jdqit,
      in_jxsSum: data.jxsSum,
      procName: 'PROC_JSC_DPYSED_EDIT',
    }), //budgets,saleTargets是12个月的数据，数组形式
  deleteCost: id => ax.del('shop/fee', { id }), //相当于shop/budget/id
  getGeneral: ({ shop, year, month }) =>
    ax.get({
      in_dpName: shop,
      in_year: year,
      in_month: month,
      procName: 'PROC_JSC_YYFY_LOAD',
    }), // applyCode, year, month, shopName, tmFees, jdFees, sales
}

//库存
const Inventory = {
  // 品类库存金额占比表   大悦
  getSales: ({ pinp, leim }) =>
    ax.get({
      in_pinpName: pinp,
      in_leibName: leim,
      procName: 'PROC_MM_PINL_KUC_SUM_RPT',
    }), // pinp,leim, amount, cost, amountPer, costPer

  // 库存明细表   花生
  getDetail: ({ pinp, shangpCode }) =>
    ax.get({
      in_pinpName: pinp,
      in_shangpCode: shangpCode,
      procName: 'PROC_SYS_JSC_KXMC_LOAD',
    }), // pinp,leim, kuq, shangpCode, pic, amountForSale, sales30Day
}

// 店铺日常数据统计表  随风
const Daily = {
  get: ({ shop, dateFrom, dateTo }) =>
    ax.get({
      in_sellerNick: shop,
      in_dateStart: dateFrom,
      in_dateEnd: dateTo,
      procName: 'PROC_SYS_JSC_YEW_DAILY_LOAD',
    }),
}

// 客户商品购买记录   大悦
const CRM = {
  // 返回 pingp,leim,shangpCode,name,phone,shopName,dingdDate, age, address
  get: ({ pinp, shangpCode, first, last }) =>
    // ax.get({
    //   in_pinpName: pinp,
    //   in_shangpCode: shangpCode,
    //   in_firstNo: first,
    //   in_lastNo: last,
    //   procName: 'PROC_MM_KEH_GOUM_LOAD_FENY',
    // }),
    request
      .get('', {
        params: {
          in_pinpName: pinp,
          in_shangpCode: shangpCode,
          in_firstNo: first,
          in_lastNo: last,
          procName: 'PROC_MM_KEH_GOUM_LOAD_FENY',
        },
      })
      .then(({ data }) => ({ total: data.result.out_zongtNum, rows: data.rows })),
  export: ({ pinp, shangpCode }) =>
    axios({
      url: export_url,
      method: 'GET',
      params: {
        procName: 'PROC_MM_KEH_GOUM_LOAD',
        excelName: 'CRM',
        sheetName: 'CRM',
        eKey:
          'pinpName,leibName,shangpCode,shouhMan,shouhTel,sellerNick,dinghDate,shouhAddress',
        eKeyDate: 'dinghDate',
        in_pinpName: pinp,
        in_shangpCode: shangpCode,
        in_startTime: '',
        in_endTime: '',
      },
      responseType: 'blob', // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'CRM.xls')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }),
}

//区域类目表  随风

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

// 安装费 花生
const Fee = {
  getInstall: ({ shop, leim, dateFrom, dateTo }) =>
    ax.get({
      in_dpName: shop,
      in_leibName: leim,
      in_caozTimeStart: dateFrom,
      in_caozTimeEnd: dateTo,
      procName: 'PROC_JSC_AZF_LOAD',
    }),
  //返回pinp,leim,province,sales,salesPer,salesAmount,salesAmountPer,chukCost, chukCostPer, chukAmount
}

// 服务 小五
const Service = {
  getDetail: ({ shop, company, dateFrom, dateTo }) =>
    ax.get({
      in_gongsName: company,
      in_shopName: shop,
      in_starTime: dateFrom,
      in_endTime: dateTo,
      procName: 'PROC_SYS_SERVICE_CHARGE_LIST_LOAD',
    }),
  //返回pinp,leim,province,sales,salesPer,salesAmount,salesAmountPer,chukCost, chukCostPer, chukAmount
  getBasic: ({ shop, company, dateFrom, dateTo }) =>
    ax.get({
      in_gongsName: company,
      in_shopName: shop,
      in_starTime: dateFrom,
      in_endTime: dateTo,
      procName: 'PROC_SYS_SERVICE_CHARGE_COUNT_LOAD',
    }),

  getType: ({ shop, company, dateFrom, dateTo }) =>
    ax.get({
      in_gongsName: company,
      in_shopName: shop,
      in_starTime: dateFrom,
      in_endTime: dateTo,
      procName: 'PROC_SYS_SERVICE_CHARGE_COUNT_LOAD_TOS',
    }),
}

export default {
  Filter,
  Shop,
  Inventory,
  Daily,
  CRM,
  Geo,
  Fee,
  Service,
}

// {
//   "procName":PROC_JSC_DPYSWH_ADD",
//   "in_year": "2015",
//   "in_dpName": "东葵-TOTO1号店旗舰店",
//   "in_ys": ",2,2,2,2,2,2,2,2,2,2,2,2",
//   "in_xiaosmb": ",2,2,2,2,2,2,2,2,2,2,2,2"
// }
