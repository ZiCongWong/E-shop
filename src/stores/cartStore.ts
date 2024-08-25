import { computed, ref } from "vue";

import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI, deleteCartAPI } from "@/apis/cart";
// 定义接口
interface CartItem {
  id: string;
  name: string;
  price: number;
  picture: string;
  count: number;
  skuId: string;
  attrsText: string;
  selected: boolean;
}
export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    const cartList  = ref<any[]>([]);
    const addCart = async (goods: CartItem) => {
      console.log("添加", goods);
      const { skuId, count } = goods;
      if (isLogin.value) {
        // 登录状态下，将商品添加到服务器端
        await insertCartAPI({ skuId, count });
        updateNewList();
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
          // 找到了
          item.count++;
        } else {
          // 没找到
          cartList.value.push(goods);
        }
      }
    };
    const removeCart = async (skuId: any) => {
      if (isLogin.value) {
        await deleteCartAPI([skuId]);
        updateNewList();
      } else {
        const idx = cartList.value.findIndex((item) => item.skuId === skuId);
        if (idx > -1) {
          cartList.value.splice(idx, 1);
        }
      }
    };

    const updateNewList = async () => {
      const res = await findNewCartListAPI();
      cartList.value = res.data.result;
    };

    const clearCart = () => {
      cartList.value = [];
    };
    const singleCheck = (skuId: any, checked: boolean) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = checked;
    };

    // a 是累加器（accumulator），初始值为 0。
    // c 是当前遍历到的数组元素（即每个商品项）。
    // c.count 是当前商品项的数量。
    // a + c.count 将当前商品项的数量累加到累加器 a 中。

    const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0));
    const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + parseFloat(c.price) * c.count, 0));
    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });
    const allCheck = (checked: boolean) => {
      cartList.value.forEach((item) => {
        item.selected = checked;
      });
    };

    //1.总数量
    const totalCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));

    //2.总价格
    const totalPrice = computed(() => cartList.value.reduce((a, c) => a + parseFloat(c.price) * c.count, 0));
    return {
      addCart,
      cartList,
      removeCart,
      totalCount,
      totalPrice,
      singleCheck,
      allCheck,
      isAll,
      selectedCount,
      selectedPrice,
      clearCart,
      updateNewList,
    };
  },
  {
    persist: true,
  },
);
