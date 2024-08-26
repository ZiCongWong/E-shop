import request from "@/utils/http";

export const loginApi = ({account, password}: any) => {
    return request({
        url: "/login",
        method: "POST",
        data: {
            account,
            password,
        },
    });
};

export const getLikeListAPI = ({limit = 4}: any) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}

