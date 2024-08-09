import { loginApi } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    //1.定义管理用户数据的状态
    const userInfo = ref<any>({});
    //2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }: any) => {
      const res = await loginApi({ account, password });
      userInfo.value = res.data.result;
      //合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selectef,
            count: item.count,
          };
        }),
      );
      cartStore.updateNewList();
    };
    //3.返回管理用户数据的状态和action函数
    function clearUserInfo() {
      userInfo.value = {};
      cartStore.clearCart();
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  },
);
