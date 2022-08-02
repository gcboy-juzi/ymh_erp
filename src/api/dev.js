import request from '@/utils/request'

export function login1(data) {
    return request({
      url: '/login/loginIn',
      method: 'post',
      data
    })
}