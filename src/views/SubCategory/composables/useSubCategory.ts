import { getSubCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export const useSubCategory = () => {
  const route = useRoute();
  const reqData = ref<any>({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: "publishTime",
  });

  const goodList = ref<any>([]);
  const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value);
    goodList.value = res.data.result.items;
  };

  const disabled = ref(false);
  const loadMore = async () => {
    reqData.value.page += 1;
    const res = await getSubCategoryAPI(reqData.value);
    goodList.value = [...goodList.value, ...res.data.result.items];

    if (res.data.result.items.length === 0) {
      disabled.value = true;
    }
  };

  onMounted(() => {
    getGoodList();
  });

  const tabChange = () => {
    console.log("here");
    reqData.value.page = 1;
    getGoodList();
  };

  return {
    goodList,
    reqData,
    loadMore,
    tabChange,
    disabled,
  };
};
