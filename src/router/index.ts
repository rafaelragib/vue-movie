import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import SignIn from '../views/SignIn.vue'
import WatchList from '../views/WatchList.vue'


const routes = [
  {
    path:'/',
    name :'Search',
    component:Search
  },
  {
    path:'/signIn',
    name :'SignIn',
    component:SignIn
  },
  {
    path:'/WatchList',
    name :'WatchList',
    component:WatchList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
