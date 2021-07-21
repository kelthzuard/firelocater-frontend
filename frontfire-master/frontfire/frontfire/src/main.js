// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import Es6Promise from 'es6-promise' ;
require('es6-promise').polyfill() ;
Es6Promise.polyfill();
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
//import VueSocketIO from 'vue-socket.io';
//var io = require('socket.io-client')
import io from 'socket.io-client'
import api from './api'

Vue.config.productionTip = false;
Vue.use(iView);

axios.defaults.baseURL = '//localhost:3000/'
Vue.prototype.$axios = axios;
Vue.prototype.$api = api
Vue.prototype.$io = io


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
