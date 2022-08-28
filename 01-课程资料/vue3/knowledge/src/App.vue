<template>
  <router-view></router-view>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const route = useRoute(),
      router = useRouter();

    console.log(route, router);
  },
};
</script>