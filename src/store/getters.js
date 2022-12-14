const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 在根级的getters上 开发子模块的属性给别人看 给别人用
  token: state => state.user.token,
  staffPhoto: state => state.user.userInfo.staffPhoto,
  name: state => state.user.userInfo.username, // 建立用户名称的映射
  userId: state => state.user.userInfo.userId
}
export default getters
