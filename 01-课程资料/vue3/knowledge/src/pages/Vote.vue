<template>
  <div class="vote-box">
    <header class="vote-head">
      <h3 ref="root">{{ title }}</h3>
      <span>{{ supNum + oppNum }}人</span>
    </header>
    <main class="vote-main">
      <p>支持人数：{{ supNum }}人</p>
      <p>反对人数：{{ oppNum }}人</p>
      <p>支持比率：{{ ratio }}</p>
    </main>
    <footer class="vote-footer">
      <button @click="change('sup')">支持</button>
      <button @click="change('opp')">反对</button>
    </footer>
  </div>
</template>

<script>
import { reactive, toRefs, computed, onMounted, onBeforeMount, ref } from "vue";

export default {
  name: "Vote",
  props: ["title"],
  setup(props) {
    let state = reactive({
      supNum: 10,
      oppNum: 5,
    });

    let ratio = computed(() => {
      let { supNum, oppNum } = state;
      let total = supNum + oppNum;
      return total === 0 ? "--" : ((supNum / total) * 100).toFixed(2) + "%";
    });

    const change = (type) => {
      type === "sup" ? state.supNum++ : state.oppNum++;
    };

    onBeforeMount(() => {
      // 发送异步数据请求
    });

    // Vue3中获取DOM元素：把RefImpl对象作为元素的ref属性值，这样基于“RefImpl对象.value”可以获取此DOM
    let root = ref(null);
    onMounted(() => {
      // 获取DOM元素
      // console.log(root.value);
    });

    return {
      ...toRefs(state),
      ratio,
      change,
      root,
    };
  },
};
</script>

<style>
.vote-box {
  box-sizing: border-box;
  width: 300px;
}
.vote-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>