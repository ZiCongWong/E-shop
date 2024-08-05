import { getCategoryFilterAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export const useCategory = () => {
  const route = useRoute();
  const categoryData = ref<any>([]);
  const getCategoryData = async () => {
    const res = await getCategoryFilterAPI(route.params.id);
    categoryData.value = res.data.result;
  };

  onMounted(() => {
    getCategoryData();
  });

  return {
    categoryData,
  };
};
