import Cookies from 'js-cookie'

const TokenKey = 'rsaas-ihrm-token'

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
