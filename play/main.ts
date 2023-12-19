import { createApp } from "vue";
import App from "./app.vue";
import { WaterFall, WaterFallItem } from "@waterfall-plus/components";
const app = createApp(App);
app.use(WaterFall).use(WaterFallItem);
app.mount("#app");
