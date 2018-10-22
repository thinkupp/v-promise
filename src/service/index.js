import Vue from 'vue';
import RouteServer from './RouteServer';
import ApiServer from './ApiServer';
import ModalServer from './ModalServer';

Vue.prototype.$route = RouteServer;
Vue.prototype.$api = ApiServer;
Vue.prototype.$modal = ModalServer;
