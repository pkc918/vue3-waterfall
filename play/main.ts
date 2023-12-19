import { createApp } from "vue";
import App from "./app.vue";
import WaterFall from "@waterfall-plus/components";
const app = createApp(App);
app.use(WaterFall);
app.mount("#app");
