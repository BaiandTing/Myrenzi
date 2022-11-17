const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 在根级的getters上 开发子模块的属性给别人看 给别人用
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.userInfo.name// 建立用户名称的映射
}
export default getters
