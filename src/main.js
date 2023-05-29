import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
//import ElementUI from "element-ui";
createApp(App)
  //.use(ElementUI)
  .use(store)
  .mount("#app");
