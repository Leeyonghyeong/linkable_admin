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
        path: '/game/add',
        name: 'GameAdd',
        component: () => import('@/pages/game/AddGame.vue'),
      },
      {
        path: '/game/edit',
        name: 'GameEdit',
        component: () => import('@/pages/game/EditGame.vue'),
      },
      {
        path: '/game/list',
        name: 'GameList',
        component: () => import('@/pages/game/list/GameList.vue'),
      },
      {
        path: '/game/list/detail',
        name: 'GameListDetail',
        component: () => import('@/pages/game/list/GameListDetail.vue'),
      },
      {
        path: '/game/group',
        name: 'GameGroup',
        component: () => import('@/pages/game/group/GameGroup.vue'),
      },
      {
        path: '/game/group/detail',
        name: 'GameGroupDetail',
        component: () => import('@/pages/game/group/GameGroupDetail.vue'),
      },
      {
        path: '/game/group/add',
        name: 'GameGroupAdd',
        component: () => import('@/pages/game/group/AddGameGroup.vue'),
      },
      {
        path: '/game/group/edit',
        name: 'GameGroupEdit',
        component: () => import('@/pages/game/group/EditGameGroup.vue'),
      },
      {
        path: '/coupon',
        name: 'Coupon',
        component: () => import('@/pages/coupon/Coupon.vue'),
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
