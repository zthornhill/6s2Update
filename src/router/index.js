import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth'
import UserList from '@/components/UserList'
import UserCreate from '@/components/UserCreate'
import SubscriptionList from '@/components/SubscriptionList'
import SubscriptionCreate from '@/components/SubscriptionCreate'
import Payment from '@/components/Payment'
import ForgotPassword from '@/components/ForgotPassword.vue'
import Register from '@/components/Register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user-list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user-list/:msg',
      name: 'UserUpdatedList',
      component: UserList
    },
    {
      path: '/user-create',
      name: 'UserCreate',
      component: UserCreate
    },
    {
      path: '/user-create/:pk',
      name: 'UserUpdate',
      component: UserCreate
    },

    {
      path: '/subscription-list',
      name: 'SubscriptionList',
      component: SubscriptionList
    },
    {
      path: '/subscription-list/:msg',
      name: 'SubscriptionUpdatedList',
      component: SubscriptionList
    },
    {
      path: '/subscription-create',
      name: 'SubscriptionCreate',
      component: SubscriptionCreate
    },
    {
      path: '/subscription-create/:pk',
      name: 'SubscriptionUpdate',
      component: SubscriptionCreate
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
