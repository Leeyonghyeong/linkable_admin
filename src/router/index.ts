import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('@/pages/main/Main.vue'),
      },
      {
        path: '/game/list',
        name: 'GameList',
        component: () => import('@/pages/game/GameList.vue'),
      },
      {
        path: '/game/list/detail',
        name: 'GameListDetail',
        component: () => import('@/pages/game/GameListDetail.vue'),
      },
      {
        path: '/game/group',
        name: 'GameGroup',
        component: () => import('@/pages/game/GameGroup.vue'),
      },
      {
        path: '/store',
        name: 'Store',
        component: () => import('@/pages/store/Store.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/pages/users/Users.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
