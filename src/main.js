import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import $bus from "./utils/Events";
import $e from "./data";

const app = createApp(App);
app.use(router);

app.provide("$bus", $bus);
app.provide("$e", $e);
app.mount("#app");
