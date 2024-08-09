import request from "../utils/http";

export const insertCartAPI = ({ skuId, count }: any) => {
  return request({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

export const findNewCartListAPI = () => {
  return request({
    url: "/member/cart",
    method: "GET",
  });
};

export const deleteCartAPI = (ids: any) => {
  return request({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};

export const mergeCartAPI = (data: any) => {
  return request({
    url: "/member/cart/merge",
    method: "POST",
    data,
  });
};
