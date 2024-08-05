import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useCategory = () => {
  const categoryList = ref<any>([]);
  const route = useRoute();
  
  const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id);
    categoryList.value = res.data.result;
  };

  onMounted(() => {
    getCategory();
    // fetchBanner();
  });
  watch(
    () => route.params.id,
    () => {
      getCategory();
    },
  );

  return {
    categoryList,
  };
};
