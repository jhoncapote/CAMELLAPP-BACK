/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.1.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
 import VeeValidate from 'vee-validate';
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import axios from 'axios'
import VueAxios from 'vue-axios'


import 'core-js';

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import es from 'vee-validate/dist/locale/es'
import  { Validator } from "vee-validate";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// router setup
import routes from "./routes/routes";
import "./registerServiceWorker";
// plugin setup
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LightBootstrap);
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);

Validator.localize("es", es);
// configure router


const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
