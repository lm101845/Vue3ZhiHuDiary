<template>
  <h2>珠峰培训</h2>
  <Suspense>
    <template #default>
      <async-test></async-test>
    </template>
    <template #fallback> 小主，我们正在努力加载中... </template>
  </Suspense>
</template>

<script>
import AsyncTest from "./AsyncTest.vue";
export default {
  components: { AsyncTest },
  name: "App",
};
</script>