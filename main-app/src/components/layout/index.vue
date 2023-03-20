<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">
          <ul>
            <li :class="isActive(1)" @click="goPath(1)">子应用1</li>
            <li :class="isActive(2)" @click="goPath(2)">子应用2</li>
          </ul>
        </el-aside>
        <el-main> <main id="container"></main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const c = ref(1);
const isActive = (num: number) => {
  if (c.value === num) {
    return "active";
  }
};
const goPath = (num: number) => {
    c.value=num;
    let path = '/app_01'
  switch (num) {
    case 1:
        path = '/app_01'
        break;
        case 2:
        path = '/app_02'
        break;  
     
    default:
        break;
  }
  history.pushState({}, "", path);
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.common-layout {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 5%;
}
.el-container {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
:deep(.el-header) {
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.el-aside) {
  background-color: #404040;
}
ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  display: block;
  list-style: none;
  text-align: center;
  margin: 10px;
}
li:hover {
  cursor: pointer;
  background-color: aliceblue;
  color: #000;
  border-radius: 5px;
}
.active {
  background-color: aliceblue;
  color: #000;
  border-radius: 5px;
}
</style>
