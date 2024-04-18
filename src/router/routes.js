const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PostsList', component: () => import('pages/PostsList.vue') },

      { path: '/authors', name: 'AuthorsList', component: () => import('src/pages/AuthorsList.vue') },

      { path: '/authors/new', name: 'AuthorsCreate', component: () => import('src/pages/AuthorsForm.vue') },

      { path: '/new', name: 'PostCreate', component: () => import('src/pages/PostsForm.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
