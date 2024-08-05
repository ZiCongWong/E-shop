import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/apis/home";

//封装轮播图的逻辑
export const useBanner = () => {
  const bannerList = ref<any[]>([]);
  const getBanner = async () => {
    const result = await getBannerAPI({
      distributionSite: "2",
    });
    //   console.log(result.data);
    bannerList.value = result.data.result;
  };

  onMounted(() => getBanner());

  return {
    bannerList,
  };
};
