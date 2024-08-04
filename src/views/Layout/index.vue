<script setup lang="ts">
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>
<template>
  <div class="layout">
    <Layout-fixed />
    <LayoutNav />
    <LayoutHeader />
    <router-view></router-view>
    <layout-footer />
  </div>
</template>

<style scoped lang="scss">
.layout {
  color: $secondary;
}
</style>
