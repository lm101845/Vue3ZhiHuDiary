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
import { ref, computed } from "vue";
export default {
  name: "Vote",
  props: ["title"],
  // vue3中一切美好的事物都从setup开始
  //   + 依然需要基于props注册使用
  //   + setup中可以拿到props值「本身是响应式的，基于Proxy实现代理的」
  //   + setup发生在初始化props和beforeCreate之间，所以在setup中没有this{this->undefined}
  //   + 我们会把vue2中的 data/methods/computed/watch/filters... 这些options api全部聚合在setup函数中处理，且基于vue3中提供的各种api，实现函数式编程!!
  //   + setup中返回的内容可以直接在视图中进行渲染
  //   + setup函数只有在组件第一次加载的时候执行一次，当组件重新渲染不会再次执行它「销毁后再重新加载，则属于第一次加载逻辑」
  setup(props) {
    // 基于 ref(初始值) 构建响应式数据(状态)
    //   + 返回 RefImpl 对象
    //   + 具备value属性可以获取和设置状态值
    //   + 而且value属性进行了set/get数据劫持「Object.defineProperty」
    //   + 在模板视图中渲染的时候，我们无需RefImpl.value，因为自动渲染的就是他的value值
    let supNum = ref(10),
      oppNum = ref(5);

    // 计算属性
    //   + 语法：computed([getter函数])
    //   + 返回 ComputedRefImpl 对象，和RefImpl对象类似，都是操作其value属性...
    //   + 这样获取的计算属性值是只读的，当我们尝试去修改的时候，报警告:computed value is readonly
    let ratio = computed(() => {
      let total = supNum.value + oppNum.value;
      return total === 0
        ? "--"
        : ((supNum.value / total) * 100).toFixed(2) + "%";
    });

    // 普通方法
    const change = (type) => {
      type === "sup" ? supNum.value++ : oppNum.value++;
    };

    return {
      supNum,
      oppNum,
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