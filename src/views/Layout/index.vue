<script setup lang="ts">
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
</script>
<template>
  <div class="layout">
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
