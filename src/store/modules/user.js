// 本地缓存
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
// Vuex的持久化 如何实现 ？ Vuex和前端缓存相结合
const state = {
  // 设置token初始状态   token持久化 => 放到缓存中
  token: getToken(),
  userInfo: {}
}
// 修改状态
const mutations = {
  /* * 设置token ** */
  setToken(state, token) {
    state.token = token
    // vuex变化 => 缓存数据
    setToken(token)// vuex和 缓存数据的同步
  },

  // 删除缓存
  removeToken(state) {
    state.token = null// 删除vuex的token
    removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  },

  // 设置用户信息 --- 详细资料
  setUserInfo(state, userInfo) {
    // 用 浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
    state.userInfo = { ...userInfo }
  },

  // 删除用户信息
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
// 异步操作
const actions = {
  //  登录 的 异步
  // 定义login action  也需要参数 调用action时 传递过来的参数
  async login(ctx, data) {
    const res = await login(data)
    // console.log(res)// 实际上就是一个promise  result就是执行的结果
    // axios默认给数据加了一层data
    // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
    // 现在有用户token
    // actions 修改state 必须通过mutations
    ctx.commit('setToken', res)
  },
  // 获取用户资料的action
  async getUserInfo(ctx) {
    const res = await getUserInfo()
    ctx.commit('setUserInfo', res)
    return res // 这里为什么要返回 为后面埋下伏笔
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
