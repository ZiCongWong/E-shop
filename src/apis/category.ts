import request from "@/utils/http";

// 获取分类信息的API函数
export const getCategoryAPI = (id:string|string[]) => {
  return request({
    url: "/category",
    method: "get",
    params: {
        id
    }
  });
};
