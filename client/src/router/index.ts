import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import SignIn from '../views/SignIn.vue'
import WatchList from '../views/WatchList.vue'
import {store} from '../store'

const routes = [
  {
    path:'/',
    name :'Search',
    component:Search
  },
  {
    path:'/signin',
    name :'SignIn',
    component:SignIn
  },
  {
    path:'/Watchlist',
    name :'WatchList',
    component:WatchList,
    meta:{
      requireAuth:true
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>
{
  if(to.meta.requireAuth){
    if(store.token!=="")
      next();
  
    else
    next({
      name:'SignIn'
    });
  }
  else
    next();
  
})

export default router
