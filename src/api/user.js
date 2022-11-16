import request from '@/utils/request'

/* *
* 登录接口
 */// 因为所有的接口都要跨域 表示所有的接口要带 /api
export function login(data) {
  // 返回一个axios对象 => promise  // 返回了一个promise对象
  return request.post('/sys/login', data)
}

export function getInfo(token) {

}

export function logout() {

}
