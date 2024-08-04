import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./utils/store";

import "@/style/common.scss";

import router from "./routers/index";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
