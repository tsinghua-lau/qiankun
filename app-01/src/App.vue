<script setup lang="ts">
console.log("app 01 mounted");
function toApp(path: string) {
  history.pushState({}, "", path);
}
</script>

<template>
  <h3>我是独立的Vue子项目1</h3>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

aside {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}

a {
  margin: 0 10px;
}
</style>
