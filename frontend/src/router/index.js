import Vue from 'vue'
import Router from 'vue-router'

//axios test
import TestWorld from '@/components/TestWorld'

//login
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'

//vuex
import store from '../vuex/store'


Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) return next() // isAuth === true면 페이지 이동
  next('/') // isAuth === false면 다시 로그인 화면으로 이동
}


export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'TestWorld',
      component: TestWorld
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: requireAuth() // HelloWorld에 진입하기 전에 requireAuth 함수를 실행한다
    },
  ]
})
