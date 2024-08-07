//把compenents中所有组件都进行全局化注册

import ImageView from "./ImageView/index.vue";
import XtxSku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app: any) {
    //app.component('HelloWorld', HelloWorld)
    app.component("ImageView", ImageView);
    app.component("XtxSku", XtxSku);
  },
};
