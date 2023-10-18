import { createApp } from "vue";
// import vuetify from "./plugins/vuetify.js";
// import VDatePicker from "@/plugins/vuetify.js";
import App from "./App.vue";
import router from "./router/index.js";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
// import Vue from "vue";

createApp(App).use(router).use(VueChartkick).mount("#app");
