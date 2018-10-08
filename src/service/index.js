import Vue from 'vue';
import RouteServer from './RouteServer';
import ApiServer from './ApiServer';

Vue.prototype.$route = RouteServer;
Vue.prototype.$api = ApiServer;
