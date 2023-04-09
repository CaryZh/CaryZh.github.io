import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeNav from '../views/HomeNav.vue'
import HomeReconmend from '../views/HomeReconmend.vue'
import HomeHot from '../views/HomeHot.vue'
import HomeSearch from '../views/HomeSearch.vue'
import PlayList from '../views/PlayList.vue'




Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
   {
    path: '/',
    name: 'home',
    component: HomeNav,
    children:[
      {
        path:"",
        component:HomeReconmend,
      },
       {
        path:"hot",
        component:HomeHot,
      },
       {
        path:"search",
        component:HomeSearch,
      },
    ],
  },
  {
    path:'/playlist',
    component:PlayList,
  }
]

const router = new VueRouter({
  routes
})

export default router
