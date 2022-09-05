import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import ServeRead from "@/views/ServeRead.vue"
import GetbackPassword from "@/views/GetbackPassword.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register,
  },
  {
    path:'/serveread',
    component:ServeRead
  },
  {
    path:'/getbackpassword',
    component:GetbackPassword,
  }
]

const router = new VueRouter({
  routes
})

export default router
