import request from "@/utils/http.ts"

/**
 * @description: 获取用户订单
 * @param {Object} params - 请求参数
 * @return {Promise} - 返回请求的Promise对象
 */
export const getUserOrder = (params) => {
    return request({
        url: '/member/order',
        method: 'GET',
        params
    })
}
