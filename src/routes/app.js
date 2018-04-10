import Inventory from 'views/Inventory/Inventory'
// import Shop from 'views/Shop'

const appRoutes = [
  {
    path: '/op-budget',
    sidebarMenu: '运营费用',
    sidebarName: '店铺预算维护',
    navbarName: '店铺预算维护',
    component: Inventory,
  },
  {
    path: '/op-cost',
    sidebarMenu: '运营费用',
    sidebarName: '店铺费用额度维护',
    navbarName: '店铺费用额度维护',
    component: Inventory,
  },
  {
    path: '/op-general',
    sidebarMenu: '运营费用',
    sidebarName: '运营费用',
    navbarName: '运营费用',
    component: Inventory,
  },
  {
    path: '/inventory-cost',
    sidebarMenu: '库存',
    sidebarName: '品类库存金额表',
    navbarName: '品类库存金额表',
    component: Inventory,
  },
  {
    path: '/inventory-detail',
    sidebarMenu: '库存',
    sidebarName: '库存明细表',
    navbarName: '库存明细表',
    component: Inventory,
  },
  {
    path: '/shop-detail',
    sidebarMenu: '店铺日常数据统计表',
    sidebarName: '店铺日常数据统计表',
    navbarName: '店铺日常数据统计表',
    component: Inventory,
  },
  {
    path: '/crm',
    sidebarMenu: 'CRM历史数据',
    sidebarName: 'CRM历史数据',
    navbarName: 'CRM历史数据',
    component: Inventory,
  },
  {
    path: '/geo',
    sidebarMenu: '区域类目报表',
    sidebarName: '区域类目报表',
    navbarName: '区域类目报表',
    component: Inventory,
  },
  { redirect: true, path: '/', to: '/inventory-detail', navbarName: 'Redirect' },
]

export default appRoutes
