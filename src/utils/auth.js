import Cookies from 'js-cookie'

const TokenKey = 'rsaas-ihrm-token'
const timeKey = 'hrsaas-timestamp-key' // 设置一个独一无二的key

// 获取
export function getToken() {
  return Cookies.get(TokenKey)
}

// 设置
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 删除
export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 设置时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}
