import router from './index'
import store from '@/store/index'
const whiteList = [
  '/user/login'
] // no redirect whitelist
const handleRouter = (to, next) => {
  if (whiteList.includes(to.path)) {
    next('/')
  } else {
    next()
  }
}
router.beforeEach((to, from, next) => {
  //是否登录
  const isLogin = sessionStorage.getItem('isLogin')
  if (isLogin) {
    // 解决刷新后路由消失问题
    if (!store.state.routes.length) {
      store.dispatch('getRoleAction').then(res => {
        console.log(res)
        // 解决动态添加路由 进入页面白屏 确保路由完整性，设置replace 为true 这样导航就不会留下历史记录。
        next({ ...to, replace: true })
      })
    } else {
      handleRouter(to, next)
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/user/login')
    }
  }
})
