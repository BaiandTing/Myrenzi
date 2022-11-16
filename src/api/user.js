import request from '@/utils/request'

/* *
* 登录接口
 */// 因为所有的接口都要跨域 表示所有的接口要带 /api
export function login(data) {
  // 返回一个axios对象 => promise  // 返回了一个promise对象
  return request.post('/sys/login', data)
}

/* *
* 获取用户的基本资料
* */
export function getUserInfo() {
  return request.post('/sys/profile')
}

export function logout() {

}
