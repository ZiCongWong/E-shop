import request from "@/utils/http";

export const loginApi = ({ account, password }: any) => {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
