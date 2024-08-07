import { getDetail } from "@/apis/detail";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useDetailData = () => {
  const goods = ref<any>({});
  const route = useRoute();
  const getGoods = async () => {
    const res = await getDetail(route.params.id);
    goods.value = res.data.result;
  };
  onMounted(() => {
    getGoods();
  });
  watch(
    () => route.params.id,
    () => {
      getGoods();
    },
  );
  return {
    goods,
  };
};
