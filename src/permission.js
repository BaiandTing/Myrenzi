// 控制页面登录权限的文件
// 专门处理路由权限的
// 权限拦截 导航守卫 路由守卫  router
import router from '@/router'// 引入路由实例
import store from '@/store'
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

// 白名单 定义白名单  所有不受权限控制的页面
const whiteList = ['/404', '/login']

// 前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 打开进度条
  // 获取token
  const token = store.getters.token
  //  首先判断有无token
  if (token) {
    // 有token 继续判断是不是去登录页
    if (to.path === '/login') {
      //  表示去的是登录页   跳转到主页
      next('/')
    } else {
      next() // 直接放行
    }
  } else {
    // 没有token  只能去 白名单 里面的页面
    if (whiteList.indexOf(to.path) > -1) {
      // 如果找到了 表示在在名单里面
      next()
    } else {
      //
      next('/login')// 跳到登录页
    }
  }
  NProgress.done()// 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
})

// 后置守卫
router.afterEach(route => {
  NProgress.done() // 关闭进度条
})
