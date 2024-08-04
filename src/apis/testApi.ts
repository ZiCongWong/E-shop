import http from '@/utils/http'

export function testApi() {
  return http({
    url: 'home/category/head',
  })
}