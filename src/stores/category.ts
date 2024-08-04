import { ref } from "vue";
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const category = ref<any[]>([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    category.value = res.data.result;
  };

  return {
    category,
    getCategory,
  };  
});
