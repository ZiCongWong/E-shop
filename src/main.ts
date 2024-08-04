import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./utils/store";
import { testApi } from "@/apis/testApi";
import "@/style/common.scss"

import router from "./routers/index";
testApi().then((res) => console.log(res));
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
