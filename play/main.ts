import { createApp } from "vue";
import App from "./app.vue";
import WaterFall from "@vue3-waterfall/components";
const app = createApp(App);
app.use(WaterFall);
app.mount("#app");
