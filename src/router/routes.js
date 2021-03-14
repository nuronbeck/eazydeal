
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
      {
        path: '/cabinet',
        component: () => import('pages/ProfilePage'),
        children: [
          { path: '', component: () => import('pages/Profile/ProfilePageIndex') },
          { path: 'wallet', component: () => import('pages/Profile/ProfilePageWallet') },
          { path: 'announcements', component: () => import('pages/Profile/ProfilePageAnnouncements') },
          { path: 'favorites', component: () => import('pages/Profile/ProfilePageFavorites') },
          { path: 'chat', component: () => import('pages/Profile/ProfilePageChat') },
          { path: 'deals', component: () => import('pages/Profile/ProfilePageDeals') },
          { path: 'pro', component: () => import('pages/Profile/ProfilePagePro') }
        ]
      }
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
