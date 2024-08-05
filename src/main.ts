import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./stores/store";
import "@/style/common.scss";
import router from "./routers/index";
import { lazyPlugin } from "@/directives";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(lazyPlugin);
app.mount("#app");
