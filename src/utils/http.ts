import axios from "axios";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import router from "@/routers";
const userStore = useUserStore();

const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    ElMessage({
      type: "warning",
      message: error.response.data.message,
    });
    console.log(error);

    if (error.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(error);
  },
);

export default http; // 导出http对象
