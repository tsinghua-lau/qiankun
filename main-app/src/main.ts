import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus).mount("#app");

if ("development" === import.meta.env.MODE) {
  registerMicroApps([
    {
      name: "app_01",
      entry: "//localhost:8081/",
      container: "#container",
      activeRule: "/app_01",
    },
    {
      name: "app_02",
      entry: "//localhost:8082/",
      container: "#container",
      activeRule: "/app_02",
    },
  ]);
} else {
  registerMicroApps([
    {
      name: "app_01",
      entry: "./sub/app-01",
      container: "#container",
      activeRule: "/app_01",
    },
    {
      name: "app_02",
      entry: "./sub/app-02",
      container: "#container",
      activeRule: "/app_02",
    },
  ]);
}

setDefaultMountApp("/app_01");

start();
