<template>
  <div class="vote-box">
    <header class="vote-head">
      <h3>{{ title }}</h3>
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
import {
  ref,
  reactive,
  toRefs,
  toRef,
  readonly,
  isReadonly,
  unref,
  isRef,
  isProxy,
  isReactive,
  computed,
  watchEffect,
  watch,
} from "vue";

export default {
  name: "Vote",
  props: ["title"],
  setup(props) {
    // reactive是vue3中的第二种响应式API「基于ES6中的Proxy实现数据劫持」
    //   + 基于state.xxx去操作对应的状态
    //   + 在视图中渲染的时候如果都是 state.xxx 操作比较麻烦?  解决办法：可以基于 toRefs 函数，把state状态中的每一项都变为单独的 RefImpl 对象
    let state = reactive({
      supNum: 10,
      oppNum: 5,
    });
    let num = ref(0);

    let ratio = computed(() => {
      let { supNum, oppNum } = state;
      let total = supNum + oppNum;
      return total === 0 ? "--" : ((supNum / total) * 100).toFixed(2) + "%";
    });

    const change = (type) => {
      num.value++;
      type === "sup" ? state.supNum++ : state.oppNum++;
    };

    // watch监听器：监听现有状态改变，触发对应的函数执行
    /* watch(state, () => {
      console.log("第一次加载组件不触发，当STATE中任何状态改变，都会触发执行");
    }); */

    // 监听某一个状态  ref创建的状态直接监听  reactive创建的某个状态要写成函数
    /* watch(
      () => state.supNum,
      (next, prev) => {
        // next:最新值 prev:之前的值
        console.log(next, prev);
      }
    ); */
    /* watch(num, (next, prev) => {
      console.log("num:", next, prev);
    }); */

    /* watch(
      () => state.supNum,
      (next, prev) => {
        console.log(next, prev);
      },
      {
        immediate: true,
        deep: true,
      }
    ); */

    /* watch([() => state.supNum, num], ([next1, next2], [prev1, prev2]) => {
      console.log("SUP", next1, prev1);
      console.log("NUM", next2, prev2);
    }); */

    /* // watchEffect(callback):第一次加载组件 & 函数中所依赖的状态们发生改变 会触发callback执行，类似于周期函数中的 mounted和updated「只不过只有更改了依赖的状态才会在更新后执行」
    watchEffect(() => {
      console.log("watchEffect:", state.supNum, state.oppNum);
    }); */

    return {
      ...toRefs(state),
      ratio,
      change,
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