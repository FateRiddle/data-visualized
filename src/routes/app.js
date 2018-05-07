import ShopBudget from 'views/Shop/Budget'
import ShopCost from 'views/Shop/Cost'
import ShopGeneral from 'views/Shop/General'

import InventoryDetail from 'views/Inventory/Detail'
import InventorySales from 'views/Inventory/Sales'
import Daily from 'views/Daily'
import CRM from 'views/CRM'
import Geo from 'views/Geo'
import ServiceDetail from 'views/Service/Detail'
import ServiceBasic from 'views/Service/Basic'
import ServiceType from 'views/Service/Type'
// import InstallFee from 'views/Fee/Install'

const appRoutes = [
  {
    path: '/op-budget',
    sidebarMenu: '运营费用',
    sidebarName: '店铺预算维护',
    component: ShopBudget,
  },
  {
    path: '/op-cost',
    sidebarMenu: '运营费用',
    sidebarName: '店铺费用额度维护',
    component: ShopCost,
  },
  {
    path: '/op-general',
    sidebarMenu: '运营费用',
    sidebarName: '运营费用',
    component: ShopGeneral,
  },
  {
    path: '/inventory-cost',
    sidebarMenu: '库存',
    icon: 'tag-o',
    sidebarName: '品类库存金额表',
    component: InventorySales,
    showHelper: true,
  },
  {
    path: '/inventory-detail',
    sidebarMenu: '库存',
    icon: 'share-alt',
    sidebarName: '库存明细表',
    component: InventoryDetail,
    showHelper: true,
  },
  {
    path: '/daily',
    sidebarMenu: '店铺日常',
    sidebarName: '店铺日常数据统计表',
    component: Daily,
  },
  {
    path: '/crm',
    icon: 'team',
    sidebarMenu: 'CRM历史数据',
    sidebarName: '客户商品购买记录',
    component: CRM,
  },
  {
    path: '/geo',
    icon: 'home',
    sidebarMenu: '区域类目',
    sidebarName: '区域类目报表',
    component: Geo,
    showHelper: true,
  },
  {
    path: '/service-detail',
    icon: 'home',
    sidebarMenu: '服务费用',
    sidebarName: '服务费用明细表',
    component: ServiceDetail,
  },
  {
    path: '/service-basic',
    icon: 'home',
    sidebarMenu: '服务费用',
    sidebarName: '服务费用统计表',
    component: ServiceBasic,
  },
  {
    path: '/service-type',
    icon: 'home',
    sidebarMenu: '服务费用',
    sidebarName: '服务类型统计表',
    component: ServiceType,
  },
  // {
  //   path: '/fee-install',
  //   icon: 'home',
  //   sidebarMenu: '费用',
  //   sidebarName: '安装费报表',
  //   component: InstallFee,
  // },
  { redirect: true, path: '/', to: '/inventory-detail', navbarName: 'Redirect' },
]

export default appRoutes
