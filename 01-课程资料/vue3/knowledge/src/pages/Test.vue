<template>
  测试Vuex公共状态管理 <br />
  x:{{ x }} <br />
  y:{{ y }} <br />
  <button @click="setX(10)">改变X</button>
  <button @click="setY(2)">改变Y</button>
</template>

<script>
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "Test",
  setup() {
    const store = useStore();
    let x = computed(() => store.state.x),
      y = computed(() => store.state.y);

    const setX = (val) => {
      store.commit("changeX", val);
    };
    const setY = (val) => {
      store.dispatch("changeYAsync", val);
    };

    return {
      x,
      y,
      setX,
      setY,
    };
  },
};
</script>