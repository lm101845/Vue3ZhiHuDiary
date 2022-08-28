<template>
  获取的用户信息是<br />
  用户编号：{{ id }}<br />
  用户姓名：{{ name }}<br />
</template>

<script>
const query = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("not found");
      resolve({ id: 1, name: "珠峰培训" });
    }, 2000);
  });
};
export default {
  name: "AsyncTest",
  async setup() {
    let { id, name } = await query();
    return {
      id,
      name,
    };
  },
};
</script>