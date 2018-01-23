{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import BootstrapVue from 'bootstrap-vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store/index';
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import "bootstrap/dist/css/bootstrap.min.css"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import "bootstrap-vue/dist/bootstrap-vue.css"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(BootstrapVue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
sync(store, router);
{{/router}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


/* eslint-disable no-new */
new Vue({
  store{{#router}},
  router,{{/router}}
}).$mount('#app');
