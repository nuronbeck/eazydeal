
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage') },
      { path: '/products', component: () => import('pages/ProductsPage') },
      { path: '/services', component: () => import('pages/ServicesPage') },
      { path: '/articles', component: () => import('pages/ArticlesPage') },
      { path: '/delivery', component: () => import('pages/DeliveryPage') },
      { path: '/faqs', component: () => import('pages/FAQsPage') },
      { path: '/cabinet', component: () => import('pages/auth/UserCabinet') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404Page.vue')
  }
]

export default routes
