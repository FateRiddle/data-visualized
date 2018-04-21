import ShopBudget from 'views/Shop/Budget'
import ShopCost from 'views/Shop/Cost'
import ShopGeneral from 'views/Shop/General'

import InventoryDetail from 'views/Inventory/Detail'
import InventorySales from 'views/Inventory/Sales'
import Viewholder from 'views/Viewholder'
import Daily from 'views/Daily'
import CRM from 'views/CRM'
import Geo from 'views/Geo'
// import Shop from 'views/Shop'

const appRoutes = [
  // {
  //   path: '/op-budget',
  //   sidebarMenu: '运营费用',
  //   sidebarName: '店铺预算维护',
  //   navbarName: '店铺预算维护',
  //   component: ShopBudget,
  // },
  // {
  //   path: '/op-cost',
  //   sidebarMenu: '运营费用',
  //   sidebarName: '店铺费用额度维护',
  //   navbarName: '店铺费用额度维护',
  //   component: ShopCost,
  // },
  // {
  //   path: '/op-general',
  //   sidebarMenu: '运营费用',
  //   sidebarName: '运营费用',
  //   navbarName: '运营费用',
  //   component: ShopGeneral,
  // },
  {
    path: '/inventory-cost',
    sidebarMenu: '库存',
    icon: 'tag-o',
    sidebarName: '品类库存金额表',
    navbarName: '品类库存金额表',
    component: InventorySales,
  },
  {
    path: '/inventory-detail',
    sidebarMenu: '库存',
    icon: 'share-alt',
    sidebarName: '库存明细表',
    navbarName: '库存明细表',
    component: InventoryDetail,
  },
  // {
  //   path: '/daily',
  //   sidebarMenu: '店铺日常数据统计表',
  //   sidebarName: '店铺日常数据统计表',
  //   navbarName: '店铺日常数据统计表',
  //   component: Daily,
  // },
  // {
  //   path: '/crm',
  //   icon: 'team',
  //   sidebarMenu: 'CRM历史数据',
  //   sidebarName: 'CRM历史数据',
  //   navbarName: 'CRM历史数据',
  //   component: CRM,
  // },
  {
    path: '/geo',
    icon: 'home',
    sidebarMenu: '区域类目报表',
    sidebarName: '区域类目报表',
    navbarName: '区域类目报表',
    component: Geo,
  },
  { redirect: true, path: '/', to: '/inventory-detail', navbarName: 'Redirect' },
]

export default appRoutes
