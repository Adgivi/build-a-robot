import Vue from "vue";
import App from "./App.component";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
