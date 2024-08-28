import request from '@/utils/http.ts'

//获取详情接口
export const getCheckInfoAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}

/**
 * @description: 创建订单API
 * @param {*} data 订单数据
 * @return {*}
 */
export const createOrderAPI = (data: any) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}

export const getOrderApi = (id: any) => {
    return request({
        url: `/member/order/${id}`
    })
}
